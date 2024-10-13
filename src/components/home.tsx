import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Minus, Square, X, Videotape } from 'lucide-react';
import Link from 'next/link';
import React from "react";

import ThreeScene from "@/components/ThreeScene";
import Navbar from "@/components/navbar";
import Wave from "@/components/wave/Wave";
import Icons from "@/components/Icons";

import './globalcss/home.css';
import './globalcss/vhs.css';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen w-screen bg-slate-900 text-white">
            <Navbar />
            <Wave />
            <div className="flex flex-col lg:flex-row flex-grow overflow-hidden">
                <div className="w-full lg:w-1/2 h-auto overflow-hidden lg:mb-0">
                    <ThreeScene />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4 z-40 overflow-y-auto overflow-visible h-screen">
                    <div className="flex w-full">
                        <div className="w-3/4 px-2">
                            <Card className="border rounded bg-background/100 card-shadow backdrop-blur-sm">
                                <CardHeader className="pb-0 pt-2 px-4 justify-between border-b">
                                    <h1 className="font-bold text-lg">\NaClO4</h1>
                                    <div className="flex gap-1 pb-1.5 justify-between">
                                        <Minus size={16} />
                                        <Square size={16} />
                                        <X size={16} />
                                    </div>
                                </CardHeader>
                                <CardBody className="flex justify-center items-center py-2">
                                    <h1 className="text-3xl">
                                        {'Hey, Im'} <span className="chlorate text-4xl">Chlorate</span>
                                    </h1>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="w-1/4 px-2">
                            <Card className="border rounded bg-background/100 max-w-full card-shadow backdrop-blur-sm">
                                <CardHeader className="pb-0 pt-2 px-4 justify-between border-b">
                                    <div className="flex items-center">
                                        <h1 className="font-bold text-lg mr-2">\parcour</h1>
                                        <Videotape />
                                    </div>
                                </CardHeader>
                                <CardBody className="flex justify-center items-center py-4">
                                    <Link href="/profile" className="text-white">
                                        mon parcours
                                    </Link>
                                </CardBody>
                            </Card>
                        </div>
                    </div>

                    {/* Deuxième rangée : Parcour et Autre Carte */}
                    <div className="flex w-full">
                        <div className="w-1/4 px-2">
                            {/* Card Chat */}
                            <Card className="border rounded bg-background/100 card-shadow backdrop-blur-sm">
                                <CardHeader className="pb-0 pt-2 px-4 justify-between border-b">
                                    <h1 className="font-bold text-lg">\Cat</h1>
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
                        <div className="w-3/4 px-2">
                            {/* Autre Carte */}
                            <Card className="border rounded bg-background/100 max-w-full card-shadow backdrop-blur-sm">
                                <CardHeader className="pb-0 pt-2 px-4 justify-between border-b">
                                    <h1 className="font-bold text-lg">\me</h1>
                                </CardHeader>
                                <CardBody className="flex  px-2 py-3">
                                    <Icons />
                                </CardBody>
                            </Card>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        {[...Array(3)].map((_, index) => (
                            <Card key={index} className="border rounded bg-background/100 card-shadow backdrop-blur-sm">
                                <CardHeader className="pb-0 pt-2 px-4 justify-between border-b">
                                    <h1 className="font-bold text-lg">Placeholder Card {index + 1}</h1>
                                </CardHeader>
                                <CardBody className="flex justify-center items-center py-2">
                                    <p>Contenu de la carte placeholder</p>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
