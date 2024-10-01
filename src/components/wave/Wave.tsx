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
                    d="M 200,0 C
                        400,75
                        0,145
                        200,225
                        "
                    id="pinkWave"
                    fill="none"
                    stroke="pink"
                    strokeWidth="2"
                />
                <use href="#pinkWave"
                     y="225"/>
                <path
                    d="M 200,450 C
                        400,525
                        700,600
                        800,675
                        "
                    id="pinkWave"
                    fill="none"
                    stroke="pink"
                    strokeWidth="2"
                />

                <path
                    d="M 200,0 C
                        700,87
                        -214,174
                        180,261
                        "
                    id="tealWave"
                    fill="none"
                    stroke="teal"
                    strokeWidth="2"
                />
                <path
                    d="M 180,261 C
                        420,300
                        168,375
                        200,400
                        " //-20 marchais biena la place de 168 idk y
                    id="tealWave" // pour la deuxieme et troisieme valaur, faire la moyenne ds deux ancienne.
                    fill="none"
                    stroke="teal"
                    strokeWidth="2"
                />
                <path
                    d="M 200,400 C
                        232,430
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
