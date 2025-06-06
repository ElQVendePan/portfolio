// src/components/Hero.tsx
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero: React.FC = () => {
    return (
        <section className="text-center py-20 flex flex-col justify-center items-center px-6 relative">
            <div className="w-36 h-36 rounded-full overflow-hidden mb-8 shadow-lg border-4 border-indigo-500">
                <img src="profile.jpg" className="w-full h-full object-cover" alt="Foto de perfil de Daniel" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                👋<br />Hola, soy <span className="text-indigo-500">Daniel</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-800 font-medium h-[40px] mb-6">
                Mi creatividad se viste de {" "}
                <span className="text-indigo-600 block md:inline">
                    <Typewriter
                        words={[
                            "desarrollo web",
                            "desarrollo de apps",
                            "diseño gráfico",
                            "animación 3D",
                            "marketing digital",
                            "edición de video",
                            "VFX"
                        ]}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1500}
                    />
                </span>
            </h2>

            <p className="text-base md:text-lg max-w-xl text-gray-600 mb-8">
                Combino tecnología y creatividad para diseñar experiencias digitales únicas.
            </p>

            <a
                href="#proyectos"
                className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-indigo-700 transition"
            >
                Ver proyectos
            </a>
        </section>
    );
};

export default Hero;