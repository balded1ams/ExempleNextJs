import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { MTLLoader, OBJLoader, AsciiEffect } from 'three-stdlib';

const ThreeScene = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Ajout de l'AsciiEffect avec l'option couleur activée
        const asciiEffect = new AsciiEffect(renderer, ' .:-+*=%@#s', { invert: true, color: true }); // ASCII avec rendu couleur
        asciiEffect.setSize(window.innerWidth, window.innerHeight);

        // Ajout de l'AsciiEffect DOM au lieu de renderer.domElement
        mountRef.current.appendChild(asciiEffect.domElement);

        let object;

        // Lumière ambiante
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.9); // Lumière douce
        scene.add(ambientLight);

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
                object.position.y = -25;

                // Charger les textures après le chargement du modèle
                const textureLoader = new THREE.TextureLoader();
                const colorMap = textureLoader.load('/model_0_color.png', () => applyTextures());

                const applyTextures = () => {
                    object.traverse((child) => {
                        if (child.isMesh) {
                            if (child.material instanceof THREE.MeshPhysicalMaterial) {
                                child.material.map = colorMap;
                                child.material.needsUpdate = true;
                            } else {
                                child.material = new THREE.MeshPhysicalMaterial({
                                    map: colorMap,
                                });
                                child.material.needsUpdate = true;
                            }
                        }
                    });
                };
            });
        });

        const handleResize = () => {
            const width = mountRef.current.clientWidth;
            const height = mountRef.current.clientHeight;

            renderer.setSize(width, height);
            asciiEffect.setSize(width, height);

            camera.aspect = width / height;
            camera.updateProjectionMatrix();

            camera.position.z = (width < 500) ? 350 : 250;
        };

        const resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(mountRef.current);

        const animate = () => {
            requestAnimationFrame(animate);
            if (object) {
                object.rotation.y += 0.01;
                object.rotation.z += 0.01;
            }
            asciiEffect.render(scene, camera); // Rendu en ASCII avec couleur
        };

        animate();

        return () => {
            if (mountRef.current) {
                mountRef.current.removeChild(asciiEffect.domElement);
            }
        };
    }, []);

    return <div ref={mountRef} />;
};

export default ThreeScene;
