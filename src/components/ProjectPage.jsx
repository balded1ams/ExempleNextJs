import Image from 'next/image';

const ProjectPage = ({ title, imageUrl, description }) => {
    return (
        <div className="min-h-screen bg-slate-800 text-white">
            <div className="relative w-full h-64 md:h-96">
                <Image
                    src={imageUrl}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="brightness-50"
                />
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
