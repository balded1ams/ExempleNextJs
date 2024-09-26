import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader, MTLLoader } from 'three-stdlib';

const ThreeScene = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 200;

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
        directionalLight.position.set(1, 1, 1).normalize();
        scene.add(directionalLight);

        let object; // Variable pour stocker le modèle

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
                            // Vérifier si le matériau est MeshPhysicalMaterial pour la transmission
                            if (child.material instanceof THREE.MeshPhysicalMaterial) {
                                child.material.roughnessMap = roughnessMap;
                                child.material.metalnessMap = metalnessMap;
                                child.material.map = colorMap;  // Texture de base
                                child.material.transmissionMap = transmissionMap;  // Carte de transmission
                                child.material.transmission = 1;  // Activer la transmission

                                child.material.needsUpdate = true;
                            } else {
                                // Convertir en MeshPhysicalMaterial si nécessaire
                                const newMaterial = new THREE.MeshPhysicalMaterial({
                                    map: colorMap,
                                    roughnessMap: roughnessMap,
                                    metalnessMap: metalnessMap,
                                    transmissionMap: transmissionMap,
                                    transmission: 0.8,
                                    metalness: 0.5, // Ajuste selon tes besoins
                                    roughness: 0.5, // Ajuste selon tes besoins
                                });
                                child.material = newMaterial;
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
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} />;
};

export default ThreeScene;
