// 'use client';

import React from 'react';
import Navbar from './navbar';
import './home.css';
import './grid.css';
import './background.css'

const Home: React.FC = () => {
    return (
        <div className="bg-container min-h-screen flex flex-col items-center justify-center">
            <div className="bg-effect"></div>
            <div className="light-spots"></div>
            <div className="grid-effect"></div>
            <div className="bg-overlay flex flex-col items-center justify-center">
                <Navbar />
                <div className="text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4">
                        Bonjour <span className="inline-block">👋</span>
                    </h1>
                    <h2 className="text-4xl md:text-6xl font-light">
                        Je suis <span className="glitch-text" data-text="Chlorate">Chlorate</span>
                    </h2>
                    <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-8 rounded transition duration-300 mt-8">
                        Start
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
