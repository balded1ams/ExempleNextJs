import React, {useEffect, useRef} from 'react';
import * as THREE from 'three';
import {MTLLoader, OBJLoader, RGBELoader} from 'three-stdlib'; // Ajout de RGBELoader

const ThreeScene = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 200;

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.toneMapping = THREE.ACESFilmicToneMapping; // Tonemapping pour HDR
        renderer.toneMappingExposure = 0.3;
        mountRef.current.appendChild(renderer.domElement);


        let object; // Variable pour stocker le modèle

        // Charger l'environnement HDR
        const rgbeLoader = new RGBELoader();
        rgbeLoader.load('/sky.hdr', (hdrTexture) => {
            hdrTexture.mapping = THREE.EquirectangularReflectionMapping; // Pour l'utiliser en réflexion
            scene.environment = hdrTexture;
        });

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
                                    roughness: 0.8,
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
                object.rotation.y += 0.002;
                object.rotation.z += 0.002;
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
