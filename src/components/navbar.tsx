import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-black bg-opacity-70 border-b border-purple-500 z-50">
            <div className="flex items-center">
                <img src="/logo.png" alt="Logo" className="h-10 w-10 mr-2" />
                <span className="text-white text-xl font-bold">Chlorate</span>
            </div>
            <div className="flex space-x-6">
                <button className="text-white hover:text-purple-500 transition duration-300">Home</button>
                <button className="text-white hover:text-purple-500 transition duration-300">About</button>
                <button className="text-white hover:text-purple-500 transition duration-300">Portfolio</button>
            </div>
            <div className="w-48">
                <input
                    type="text"
                    className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400"
                    placeholder="Search..."
                />
            </div>
        </nav>
    );
};

export default Navbar;
