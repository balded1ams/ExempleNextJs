import React from 'react';

const Wave: React.FC = () => {
    return (
        <div className="relative top-0 right-0 w-full h-full pointer-events-none z-10">
            <svg
                viewBox="0 0 400 800"
                width="400"
                height="800"
                className="absolute right-0"
            >
                <path
                    d="M 200,0 C
                        400,100
                        0,200
                        200,300
                        "
                    id="base"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                />
                <use href="#base"
                     y="300"/>
                <path
                    d="M 200,600 C
                        400,700
                        700,550
                        800,500
                        "
                    id="base"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                />

                <path
                    d="M 220,0 C
                        420,100
                        20,200
                        220,300
                        "
                    id="pinkWave"
                    fill="none"
                    stroke="pink"
                    strokeWidth="2"
                />
                <use href="#pinkWave"
                     y="300"/>
                <path
                    d="M 220,600 C
                        420,700
                        700,600
                        800,500
                        "
                    id="pinkWave"
                    fill="none"
                    stroke="pink"
                    strokeWidth="2"
                />

                <path
                    d="M 180,0 C
                        380,100
                        -20,200
                        180,300
                        "
                    id="tealWave"
                    fill="none"
                    stroke="teal"
                    strokeWidth="2"
                />
                <use href="#tealWave"
                     y="300"
                     stroke="teal"/>
                <path
                    d="M 180,600 C
                        380,700
                        700,500
                        800,500
                        "
                    id="tealWave"
                    fill="none"
                    stroke="teal"
                    strokeWidth="2"
                />

            </svg>
        </div>
    );
};

export default Wave;
