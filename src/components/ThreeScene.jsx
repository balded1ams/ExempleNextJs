import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { MTLLoader, OBJLoader, AsciiEffect } from 'three-stdlib';

const ThreeScene = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 300;

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Ajout de l'AsciiEffect avec l'option couleur activée
        const asciiEffect = new AsciiEffect(renderer, ' .:-+*=%@#', { invert: true, color: true }); // ASCII avec rendu couleur
        asciiEffect.setSize(window.innerWidth, window.innerHeight);

        // Ajout de l'AsciiEffect DOM au lieu de renderer.domElement
        mountRef.current.appendChild(asciiEffect.domElement);

        let object;

        // Lumière ambiante qui éclaire toute la scène
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7); // Lumière douce
        scene.add(ambientLight);

        // Lumière directionnelle depuis le côté
        const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight2.position.set(-1, -1, 1).normalize(); // Autre source pour les reflets
        scene.add(directionalLight2);

        // Charger les matériaux avec MTLLoader
        const mtlLoader = new MTLLoader();
        mtlLoader.load('/chlorate-material.mtl', (materials) => {
            materials.preload();

            const objLoader = new OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.load('/chlorate.obj', (loadedObject) => {
                object = loadedObject;
                scene.add(object);
                object.position.y = -1;

                // Charger les textures après le chargement du modèle
                const textureLoader = new THREE.TextureLoader();
                const roughnessMap = textureLoader.load('/model_0_roughness.png', () => applyTextures());
                const metalnessMap = textureLoader.load('/model_0_metallic.png', () => applyTextures());
                const colorMap = textureLoader.load('/model_0_color.png', () => applyTextures());
                const transmissionMap = textureLoader.load('/model_0_transmittance.png', () => applyTextures());

                // Fonction pour appliquer les textures
                const applyTextures = () => {
                    object.traverse((child) => {
                        if (child.isMesh) {
                            if (child.material instanceof THREE.MeshPhysicalMaterial) {
                                child.material.roughnessMap = roughnessMap;
                                child.material.metalnessMap = metalnessMap;
                                child.material.map = colorMap;
                                child.material.transmissionMap = transmissionMap;
                                child.material.transmission = 0.5;
                                child.material.needsUpdate = true;
                            } else {
                                child.material = new THREE.MeshPhysicalMaterial({
                                    map: colorMap,
                                    roughnessMap: roughnessMap,
                                    metalnessMap: metalnessMap,
                                    transmissionMap: transmissionMap,
                                    transmission: 0.8,
                                    metalness: 0.5,
                                    roughness: 0.5,
                                });
                                child.material.needsUpdate = true;
                            }
                        }
                    });
                };
            });
        });

        // Animation
        const animate = () => {
            requestAnimationFrame(animate);
            if (object) {
                object.rotation.y += 0.005;
                object.rotation.z += 0.005;
            }
            asciiEffect.render(scene, camera); // Rendu en ASCII avec couleur
        };

        animate();

        // Nettoyage du DOM à la fin
        return () => {
            if (mountRef.current) {
                mountRef.current.removeChild(asciiEffect.domElement);
            }
        };
    }, []);

    return <div ref={mountRef} />;
};

export default ThreeScene;
