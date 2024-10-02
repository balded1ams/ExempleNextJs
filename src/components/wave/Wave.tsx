import React, { useState, useEffect } from 'react';

const Wave: React.FC = () => {
    const [verticalScale, setVerticalScale] = useState(1);
    const [svgHeight, setSvgHeight] = useState(800); // Hauteur initiale du SVG
    const [viewBoxHeight, setViewBoxHeight] = useState(800); // Hauteur initiale de la viewBox

    useEffect(() => {
        const handleResize = () => {
            const height = window.innerHeight;

            // Ajuste la hauteur du SVG et de la viewBox
            if (height > 800) {
                setVerticalScale(1.5);
                setSvgHeight(800);
                setViewBoxHeight(1000);
            } else {
                setVerticalScale(1);
                const adjustedHeight = Math.max(400, height); // Ne descend pas en dessous de 400
                setSvgHeight(adjustedHeight);
                setViewBoxHeight(adjustedHeight);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="relative top-0 right-0 w-full h-full pointer-events-none z-10">
            <svg
                viewBox={`0 0 400 ${viewBoxHeight}`} // Ajuste la hauteur de la viewBox
                width="400"
                height={svgHeight} // Ajuste la hauteur du SVG
                className="absolute right-0"
            >
                <path
                    d={`M 200,0 C
                        400,${100 * verticalScale}
                        0,${200 * verticalScale}
                        200,${300 * verticalScale}
                        `}
                    id="base"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                />
                <use href="#base" y={300 * verticalScale}/>
                <path
                    d={`M 200,${600 * verticalScale} C
                        400,${700 * verticalScale}
                        700,${550 * verticalScale}
                        700,${500 * verticalScale}
                        `}
                    id="base"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                />

                <path
                    d={`M 200,0 C
                        400,${75 * verticalScale}
                        0,${145 * verticalScale}
                        200,${225 * verticalScale}
                        `}
                    id="pinkWave"
                    fill="none"
                    stroke="pink"
                    strokeWidth="2"
                />
                <use href="#pinkWave" y={225 * verticalScale}/>
                <path
                    d={`M 200,${450 * verticalScale} C
                        400,${525 * verticalScale}
                        700,${600 * verticalScale}
                        800,${675 * verticalScale}
                        `}
                    id="pinkWave"
                    fill="none"
                    stroke="pink"
                    strokeWidth="2"
                />

                <path
                    d={`M 200,0 C
                        700,${87 * verticalScale}
                        -214,${174 * verticalScale}
                        180,${261 * verticalScale}
                        `}
                    id="tealWave"
                    fill="none"
                    stroke="teal"
                    strokeWidth="2"
                />
                <path
                    d={`M 180,${261 * verticalScale} C
                        420,${300 * verticalScale}
                        168,${375 * verticalScale}
                        200,${400 * verticalScale}
                        `}
                    id="tealWave"
                    fill="none"
                    stroke="teal"
                    strokeWidth="2"
                />
                <path
                    d={`M 200,${400 * verticalScale} C
                        232,${430 * verticalScale}
                        700,${500 * verticalScale}
                        800,${500 * verticalScale}
                        `}
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
