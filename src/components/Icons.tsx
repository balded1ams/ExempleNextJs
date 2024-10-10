import {
    Code2, Terminal, Database, FileCode, FileText, Box, Layout, ChevronLeft,
    ServerCrash, Feather, Hexagon, FileJson
} from 'lucide-react';
import React from "react";

const Icons: React.FC = () => {
    return (
        <div className="space-y-6">
            {/* Languages and Web Technologies */}
            <div className="flex gap-4 flex-wrap">
                {/* Languages */}
                <div className="flex gap-4 md:border-r-2 border-slate-600 pr-4 sm:border-r-0">
                    <Code2 className="text-2xl"/>
                    <Code2 className="text-2xl"/>
                    <Feather className="text-2xl"/>
                    <FileCode className="text-2xl"/>
                    <FileCode className="text-2xl"/>
                    <Terminal className="text-2xl"/>
                    <Database className="text-2xl"/>
                </div>
                {/* Web Technologies */}
                <div className="flex gap-4">
                    <FileText className="text-2xl"/>
                    <FileText className="text-2xl"/>
                    <Layout className="text-2xl"/>
                    <FileJson className="text-2xl"/>
                </div>
            </div>

            {/* Frameworks */}
            <div className="flex gap-4">
                <ChevronLeft className="text-2xl"/>
                <Box className="text-2xl"/>
                <Hexagon className="text-2xl"/>
                <Feather className="text-2xl"/>
                <ServerCrash className="text-2xl"/>
            </div>
        </div>
    );
};

export default Icons;
