import React from 'react';
import Navbar from "@/components/navbar";
import ThreeScene from "@/components/ThreeScene";

const Parcour: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen w-screen bg-slate-900">
            <Navbar/>
            <div className="px-4 flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 h-auto overflow-hidden lg:mb-0">
                    <ThreeScene/>
                </div>
            </div>
        </div>
    )};
export default Parcour;