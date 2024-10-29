import React from "react";

const ProjectPage = ({ title, description }) => {
    return (

        <div className="min-h-screen bg-slate-900 text-white pt-20">
            <div className="relative w-full h-64 md:h-96">
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
                </div>
            </div>
            <div className="p-8">
                <p className="text-lg">{description}</p>
            </div>
        </div>
    );
};

export default ProjectPage;
