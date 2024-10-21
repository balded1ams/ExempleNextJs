import React from 'react';
import Navbar from "@/components/navbar";
import ThreeScene2 from "@/components/ThreeScene2";
import {ScrollShadow} from "@nextui-org/react";
import './parcours.css'

const Parcour: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen w-screen bg-slate-900">
            <Navbar/>
            <div className="flex flex-row flex-grow h-screen">
                {/* Section de gauche avec ThreeScene2 */}
                <div className="w-1/2 h-full flex items-center justify-centerw">
                    <ThreeScene2/>
                </div>

                {/* Section de droite avec la timeline centrée et effet de fade */}
                <div className="w-1/2 h-5/6 flex items-center justify-center relative">
                    <ScrollShadow className="w-full h-5/6 z-10 fade">
                        <ul className="timeline">
                            <li className="timeline-event">
                                <label className="timeline-event-icon"></label>
                                <div className="timeline-event-copy">
                                    <p className="timeline-event-thumbnail">Juin 2020</p>
                                    <h3>Brevet - Collège Jean Rostand Quetigny (21)</h3>
                                    <h4>Mention Très Bien</h4>
                                    <p>Obtention du brevet des collèges avec la mention Très Bien.</p>
                                </div>
                            </li>
                            <li className="timeline-event">
                                <label className="timeline-event-icon"></label>
                                <div className="timeline-event-copy">
                                    <p className="timeline-event-thumbnail">Juin 2023</p>
                                    <h3>Baccalauréat Général - Lycée Carnot Dijon (21)</h3>
                                    <h4>Mention Assez Bien</h4>
                                    <p><strong>Spécialités : Mathématiques + Informatique et Sciences
                                        Numériques</strong></p>
                                </div>
                            </li>
                            <li className="timeline-event">
                                <label className="timeline-event-icon"></label>
                                <div className="timeline-event-copy">
                                    <p className="timeline-event-thumbnail">2023/24</p>
                                    <h3>1ère Année de BUT Informatique</h3>
                                    <h4>IUT 2 Grenoble Alpes</h4>
                                    <p><strong>Actuellement en première année de BUT Informatique.</strong></p>
                                </div>
                            </li>
                            <li className="timeline-event">
                                <label className="timeline-event-icon"></label>
                                <div className="timeline-event-copy">
                                    <p className="timeline-event-thumbnail">2023/24</p>
                                    <h3>et aprés?...</h3>
                                </div>
                            </li>
                        </ul>
                    </ScrollShadow>
                </div>
            </div>
        </div>
    );
};

export default Parcour;
