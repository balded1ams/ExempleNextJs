'use client';
import React from 'react';
import ThreeScene from "@/components/ThreeScene";
import Sword from "@/components/sword";
import './home.css';
import {Card, CardHeader, CardBody} from "@nextui-org/react";
import {Minus, Square, X} from 'lucide-react';

const Home: React.FC = () => {
    return (
        <div className="px-4 bg-slate-900 flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 border overflow-visible mb-4 lg:mb-0">
                <ThreeScene />
            </div>
            <div className="w-full lg:w-1/2 border overflow-x-visible flex flex-col lg:flex-row">
                <div className="w-full xl:w-1/2 px-2">
                    <Card isBlurred className="border bg-background/100 w-full mb-4">
                        <CardHeader className="pb-0 pt-2 px-4 justify-between border-b">
                            <h1 className="font-bold text-large">card</h1>
                            <div className="flex gap-1 pb-1.5 justify-between">
                                <Minus size={16}/>
                                <Square size={16}/>
                                <X size={16}/>
                            </div>
                        </CardHeader>
                        <CardBody className="flex justify-center items-center py-2 border-t-1 border-green-500">
                            <h1>
                                Hey, I'm <span className="chlorate">Chlo<span className="rate">rate</span></span>
                            </h1>
                        </CardBody>
                    </Card>
                    <Card isBlurred className="border bg-background/100 w-full">
                        <CardHeader className="pb-0 pt-2 px-4 justify-between border-b">
                            <h1 className="font-bold text-large">i like cat </h1>
                            <div className="flex gap-1 pb-1.5 justify-between">
                                <Minus size={16}/>
                                <Square size={16}/>
                                <X size={16}/>
                            </div>
                        </CardHeader>
                        <CardBody className="flex justify-center items-center py-2 border-t-1 border-green-500">
                        <pre className="font-mono whitespace-pre text-sm">
                            ╱|、{'\n'}
                            (˚ˎ。7{'\n'}
                            |、˜〵{'\n'}
                            じしˍ,)ノ
                        </pre>
                        </CardBody>
                    </Card>
                </div>
                <Card isBlurred className="border bg-background/100 w-full lg:w-1/2">
                    <CardHeader className="pb-0 pt-2 px-4 justify-between border-b">
                        <h1 className="font-bold text-large">i like zelda</h1>
                        <div className="flex gap-1 pb-1.5 justify-between">
                            <Minus size={16}/>
                            <Square size={16}/>
                            <X size={16}/>
                        </div>
                    </CardHeader>
                    <CardBody className="flex justify-center items-center py-2 border-t-1 border-green-500">
                        <Sword/>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};
export default Home;
