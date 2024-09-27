'use client';
import React from 'react';
import ThreeScene from "@/components/ThreeScene";
import './home.css';

const Home: React.FC = () => {
    return (
        <div className="px-4 bg-slate-900 flex flex-row">
            <div className="w-1/2 border overflow-hidden">
                <ThreeScene />
            </div>
            <div className="w-1/2 border">
                <h1>PLACEHOLDER</h1>
            </div>
        </div>
    );
};

export default Home;
