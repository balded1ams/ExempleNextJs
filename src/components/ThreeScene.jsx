'use client'
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { MTLLoader, OBJLoader, AsciiEffect } from 'three-stdlib';

const ThreeScene = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const mountElement = mountRef.current;  // Capture the current value of the ref
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);

        const asciiEffect = new AsciiEffect(renderer, ' .:-+*=%@#s', { invert: true, color: true });
        asciiEffect.setSize(window.innerWidth, window.innerHeight);
        if (mountElement && asciiEffect.domElement) {
            mountElement.appendChild(asciiEffect.domElement);
        }
        let object;
        const ambientLight = new THREE.AmbientLight(0xffffff, 7);
        scene.add(ambientLight);

        const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight2.position.set(-1, -1, 1).normalize();
        scene.add(directionalLight2);

        const mtlLoader = new MTLLoader();
        mtlLoader.load('/chlorate-material.mtl', (materials) => {
            materials.preload();

            const objLoader = new OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.load('/chlorate.obj', (loadedObject) => {
                object = loadedObject;
                scene.add(object);
                object.position.y = -25;

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
            const width = mountElement.clientWidth;
            const height = mountElement.clientHeight;
            renderer.setSize(width, height);
            asciiEffect.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            camera.position.z = (width < 500) ? 350 : 250;
        };

        const resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(mountElement);

        let animationId;
        const animate = () => {
            animationId = requestAnimationFrame(animate);
            if (object) {
                object.rotation.y += 0.01;
                object.rotation.z += 0.01;
            }
            asciiEffect.render(scene, camera);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationId);
            if (object) {
                scene.remove(object);
                object.traverse((child) => {
                    if (child.isMesh) {
                        child.geometry.dispose();
                        if (Array.isArray(child.material)) {
                            child.material.forEach((mtrl) => mtrl.dispose());
                        } else {
                            child.material.dispose();
                        }
                    }
                });
            }
            renderer.dispose();
            resizeObserver.disconnect();
            if (mountElement) {
                mountElement.removeChild(asciiEffect.domElement);  // Use captured ref value in cleanup
            }
        };
    }, []);

    return <div ref={mountRef} />;
};

export default ThreeScene;
