import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaArrowDown, FaCode, FaCube, FaPaintBrush, FaVideo } from "react-icons/fa";

const Hero: React.FC = () => {
    return (
        <section className="relative pt-40 pb-10 flex flex-col justify-center items-center px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 overflow-hidden text-white">

            {/* Fondo de patrón animado */}
            <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] bg-[size:20px_20px] opacity-10 animate-[pulse_5s_ease-in-out_infinite]" />

            {/* Halo animado detrás del perfil */}
            <motion.div
                className="absolute w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl z-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1.2 }}
                transition={{ duration: 1.2 }}
            />

            {/* Contenedor en columnas para perfil y texto */}
            <div className="z-10 flex flex-col md:flex-row items-center justify-center gap-8 mb-8 text-center md:text-left">
                {/* Foto de perfil */}
                <motion.div
                    className="w-36 h-36 rounded-full overflow-hidden border-4 border-indigo-400 shadow-xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <img src="profile.jpg" alt="Daniel" className="w-full h-full object-cover" />
                </motion.div>

                {/* Textos a la derecha de la foto */}
                <div>
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold mb-2 leading-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Hola, soy <span className="text-green-400">Daniel</span>
                    </motion.h1>

                    <motion.h2
                        className="text-xl md:text-2xl text-indigo-100 font-medium h-[40px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Mi creatividad se viste de{" "}
                        <span className="text-green-300 block md:inline drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]">
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
                    </motion.h2>
                </div>
            </div>

            {/* Lista de habilidades con íconos */}
            <motion.div
                className="z-10 flex gap-6 text-indigo-200 text-sm md:text-base font-medium flex-wrap justify-center mb-12"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <span className="flex items-center gap-2"><FaCode /> Desarrollo de Software</span>
                <span className="flex items-center gap-2"><FaPaintBrush /> Diseño & Branding</span>
                <span className="flex items-center gap-2"><FaVideo /> Edición & VFX</span>
                <span className="flex items-center gap-2"><FaCube /> AR & VR</span>


            </motion.div>

            {/* Botón de contacto */}
            <motion.a
                href="#contact"
                className="z-10 inline-block px-8 py-3 rounded-full bg-green-400 text-indigo-900 font-semibold shadow-lg hover:bg-green-300 transition-colors duration-200 mb-10 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
            >
                Contáctame
            </motion.a>

            {/* Flecha hacia abajo */}
            <motion.div
                className="z-10 text-green-300 text-center animate-bounce cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                onClick={() => {
                    const nextSection = document.getElementById("specialties");
                    if (nextSection) {
                        nextSection.scrollIntoView({ behavior: "smooth" });
                    }
                }}
            >
                <span className="text-sm mb-1 block">Conoce más sobre mí</span>
                <FaArrowDown className="text-2xl mx-auto" />
            </motion.div>
        </section>
    );
};

export default Hero;