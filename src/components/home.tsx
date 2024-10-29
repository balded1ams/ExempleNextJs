import { Card, CardBody, Input, Textarea, Divider, Button } from "@nextui-org/react";

import Navbar from "@/components/navbar";

import React, { useState } from "react";

const Home: React.FC = () => {
    const [project, setProject] = useState<{ title: string; description: string; } | null>(null);
    const [title, setTitle] = useState<string>(""); // Ajout d'un état pour le titre
    const [description, setDescription] = useState<string>(""); // Ajout d'un état pour la description

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setProject({ title, description });
    };

    return (
        <div className="min-h-screen w-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <Navbar />
            <div className="pt-20 p-4 max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center">Submit a Project</h1>
                {!project ? (
                    <Card className="p-6 rounded-lg border dark:border-gray-500 border-gray-200 bg-gray-200 dark:bg-darkGray">
                        <CardBody className="flex flex-col items-center">
                            <form onSubmit={handleFormSubmit} className="space-y-4">
                                <Input
                                    label=""
                                    placeholder="Enter project title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="bg-gray-200 dark:bg-gray-700 text-white dark:text-black"
                                />
                                <Divider />
                                <Textarea
                                    label="Description"
                                    placeholder="Enter your description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
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
