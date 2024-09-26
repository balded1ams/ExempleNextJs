import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three-stdlib';

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

        const loader = new OBJLoader();
        loader.load('/chlorate.obj', (loadedObject) => {
            object = loadedObject; // Stocke le modèle pour pouvoir le manipuler
            scene.add(object);
            object.position.y = -1;
        });

        // Animation
        const animate = () => {
            requestAnimationFrame(animate);

            // Si l'objet est chargé, on lui applique une rotation
            if (object) {
                object.rotation.y += 0.01; // Rotation sur l'axe Y
            }

            renderer.render(scene, camera);
        };

        animate();

        // Nettoyage lors du démontage du composant
        return () => {
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} />;
};

export default ThreeScene;
