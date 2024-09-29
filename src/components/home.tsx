'use client';
import React from 'react';
import {Card, CardHeader, CardBody} from "@nextui-org/react";
import {Minus, Square, X} from 'lucide-react';

import ThreeScene from "@/components/ThreeScene";
import Navbar from "@/components/navbar";
import './home.css';
import './vhs.css';

const Home: React.FC = () => {

    const addVHSEffect = () => {
        document.body.classList.add('vhs-page-effect');
    };

    const removeVHSEffect = () => {
        document.body.classList.remove('vhs-page-effect');
    };

    // Fonction pour scroller vers la nouvelle section
    const scrollToSection = () => {
        const section = document.getElementById('my-journey-section');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-slate-900">
            <Navbar/>

            {/*pt pour la navbar*/}
            <div className="px-4 flex flex-col lg:flex-row h-full pt-16">
                <div className="w-full lg:w-1/2 overflow-visible mb-4 lg:mb-0">
                    <ThreeScene />
                </div>
                <div className="w-full lg:w-1/2 border overflow-x-visible flex flex-col lg:flex-row">
                    <div className="w-full xl:w-3/4 px-2 mt-4">
                        <Card isBlurred className="border rounded bg-background/100 w-full mb-4 card-shadow">
                            <CardHeader className="pb-0 pt-2 px-4 justify-between border-b">
                                <h1 className="font-bold text-lg">\NaClO4</h1>
                                <div className="flex gap-1 pb-1.5 justify-between">
                                    <Minus size={16}/>
                                    <Square size={16}/>
                                    <X size={16}/>
                                </div>
                            </CardHeader>
                            <CardBody className="flex justify-center items-center py-2">
                                <h1 className="text-3xl">
                                    {'Hey, Im'} <span className="chlorate text-4xl">Chlorate</span>
                                </h1>
                            </CardBody>
                        </Card>

                        <div>
                            <Card isBlurred className="border rounded bg-background/100 vhs-effect card-shadow"
                                  onMouseEnter={addVHSEffect}
                                  onMouseLeave={removeVHSEffect}>
                                <CardHeader className="pb-0 pt-2 px-4 justify-between border-b">
                                    <h1 className="font-bold text-large">\cat </h1>
                                    <div className="flex gap-1 pb-1.5 justify-between">
                                        <Minus size={16}/>
                                        <Square size={16}/>
                                        <X size={16}/>
                                    </div>
                                </CardHeader>
                                <CardBody className="flex justify-center items-center py-2">
                                    <pre className="font-mono whitespace-pre text-sm">
                                        ╱|、{'\n'}
                                        (˚ˎ。7{'\n'}
                                        |、˜〵{'\n'}
                                        じしˍ,)ノ
                                    </pre>
                                </CardBody>
                            </Card>
                        </div>

                        {/* Bouton pour scroller vers la section du parcours */}
                        <button
                            className="mt-8 text-white border p-2 rounded"
                            onClick={scrollToSection}
                        >
                            Voir mon parcours
                        </button>
                    </div>
                </div>
            </div>

            <div id="my-journey-section" className="px-4 py-8 bg-slate-900">
                <h2 className="text-3xl font-bold text-white mb-4">Mon Parcours</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card className="border rounded bg-background/100 card-shadow">
                        <CardBody>
                            <h3 className="text-xl font-bold">Étape 1</h3>
                            <p>Voici une description de la première étape de mon parcours.</p>
                        </CardBody>
                    </Card>
                    <Card className="border rounded bg-background/100 card-shadow">
                        <CardBody>
                            <h3 className="text-xl font-bold">Étape 2</h3>
                            <p>Voici une description de la deuxième étape de mon parcours.</p>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Home;
