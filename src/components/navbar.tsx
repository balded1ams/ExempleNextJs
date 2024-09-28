import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="flex justify-between items-center p-4 border-b border-slate-500 text-white">
            <div className="flex items-center">
                <h1 className="mr-2"> PH </h1>
                <span className="text-lg">NaClO₄</span>
            </div>
            <div className="flex space-x-4">
                <button className="relative group">
                    <span className="border-b border-transparent transition duration-300 ease-in-out group-hover:border-red-500 group-hover:w-full w-0 block"></span>
                    <span className="relative z-10">Bouton 1</span>
                </button>
                <button className="relative group">
                    <span className="border-b border-transparent transition duration-300 ease-in-out group-hover:border-red-500 group-hover:w-full w-0 block"></span>
                    <span className="relative z-10">Bouton 2</span>
                </button>
                <button className="relative group">
                    <span className="border-b border-transparent transition duration-300 ease-in-out group-hover:border-red-500 group-hover:w-full w-0 block"></span>
                    <span className="relative z-10">Bouton 3</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
