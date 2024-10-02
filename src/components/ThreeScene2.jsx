'use client'
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { MTLLoader, OBJLoader, AsciiEffect } from 'three-stdlib';

const ThreeScene2 = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const mountElement = mountRef.current;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);

        const asciiEffect = new AsciiEffect(renderer, ' 10', { invert: true, color: true });
        asciiEffect.setSize(window.innerWidth, window.innerHeight);
        mountElement.appendChild(asciiEffect.domElement);

        let object;
        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight);


        const mtlLoader = new MTLLoader();
        mtlLoader.load('/kassette.mtl', (materials) => {
            materials.preload();

            const objLoader = new OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.load('/kassette.obj', (loadedObject) => {
                object = loadedObject;
                scene.add(object);
                const textureLoader = new THREE.TextureLoader();
                const colorMap = textureLoader.load('', () => applyTextures());

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
            camera.position.z = 1;
        };

        const resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(mountElement);

        let animationId;
        const animate = () => {
            animationId = requestAnimationFrame(animate);
            if (object) {
                object.rotation.x += 0.01;
                object.rotation.y += 0.01;
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
                mountElement.removeChild(asciiEffect.domElement);
            }
        };
    }, []);

    return <div ref={mountRef} />;
};

export default ThreeScene2;
