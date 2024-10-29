import { Card, CardBody, Input, Textarea, Divider, Button } from "@nextui-org/react";
import Navbar from "@/components/navbar";
import React, { useState } from "react";

const Home: React.FC = () => {
    const [project, setProject] = useState<{ title: string; description: string; } | null>(null);
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [darkMode, setDarkMode] = useState<boolean>(false);

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setProject({ title, description });
    };

    const bgClass = darkMode ? "bg-zinc-900" : "bg-zinc-50";
    const cardClass = darkMode ? "bg-zinc-700 border-zinc-500" : "bg-zinc-300 border-zinc-200";
    const inputBgClass = darkMode ? "bg-zinc-700 text-white" : "bg-zinc-200 text-black";
    const textareaBgClass = darkMode ? "bg-zinc-700 text-white" : "bg-gray-200 text-black";
    const titleClass = darkMode ? "text-gray-100" : "text-zinc-500";

    return (
        <div className={`min-h-screen w-screen ${bgClass} text-gray-900 dark:text-gray-100`}>
            <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
            <div className="pt-20 p-4 max-w-2xl mx-auto">
                <h1 className={`text-3xl font-bold mb-6 text-center ${titleClass}`}><u> Submit a Project </u></h1>                {!project ? (
                <Card className={`p-6 rounded-lg border ${cardClass}`}>
                        <CardBody className="flex flex-col items-center">
                            <form onSubmit={handleFormSubmit} className="space-y-4">
                                <Input
                                    label=""
                                    placeholder="Enter project title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className={inputBgClass}
                                />
                                <Divider />
                                <Textarea
                                    label="Description"
                                    placeholder="Enter your description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className={textareaBgClass}
                                />
                                <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white">
                                    Submit
                                </Button>
                            </form>
                        </CardBody>
                    </Card>
                ) : (
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">{project.title}</h2>
                        <p>{project.description}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
