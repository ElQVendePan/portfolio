// src/components/ProjectPreview.tsx
import React from "react";
import Button from "./Button";

const projects = [
    {
        title: "Zylo Music",
        desc: "Plataforma de música para artistas independientes desarrollada en React, implementando Tailwind CSS y TypeScript. Desarrollo de backend con PHP y MySQL para la creación de la API y sus respectivas endpoints.",
        img: "/zylo-cover.jpg",
        demo: "https://zylo-music.netlify.app/",
        demo_text: "Ver demo",
        button_color: "#95459a",
    },
    {
        title: "App Coopunicentro",
        desc: "Aplicación web progresiva (PWA) desarrollada para la Cooperativa Unicentro Cúcuta, actualmente usada por más de 200 asociados. La aplicación, creada con JavaScript Vanilla en el frontend y PHP con MySQL en el backend, es de uso exclusivo de los asociados y permite realizar trámites y consultar sus estados de cuenta en cualquier momento, sin necesidad de asistir físicamente a la cooperativa.",
        img: "/coopunicentro-cover.jpg",
        demo: "https://coopunicentro.com/",
        demo_text: "Ver website",
    },
    {
        title: "Macondoweek",
        desc: "Diseño de piezas gráficas publicitarias, producción de Reels, motion graphics y animación 3D para la promoción del evento MacondoWeek 2024 y 2025, organizado por MacondoLab, dedicado al crecimiento empresarial, innovación y emprendimiento.",
        img: "/macondo-cover.jpg",
    },
    {
        title: "HauntedHouses AR",
        desc: "Proyecto académico desarrollado en Unity con Vuforia que consiste en un juego de cartas AR llamado HauntedHouses. Los jugadores escanean cartas de casas para conocer su valor real (embrujadas, normales o purificadas) y utilizan la app para visualizar puntajes e interactuar con cartas comodín. La experiencia AR es fundamental para la jugabilidad.",
        img: "/project4.jpg",
    },
    {
        title: "Cortometraje con CGI",
        desc: "Proyecto académico que fusiona imágenes reales con personajes 3D animados en Blender. Utilizando After Effects para la integración CGI, VFX y composición de cada escena, finalizando la edición en Premiere Pro. El cortometraje logra un equilibrio entre elementos digitales y realidad, creando una experiencia visual única.",
        img: "/corto-cover.png",
    },
    {
        title: "First Person Shooter en Unreal Engine 4",
        desc: "Proyecto académico de videojuego FPS desarrollado en Unreal Engine 4. Participé en la ideación y diseño de niveles, incluyendo la creación de mapas de burbujas para la planificación del gameplay. Los objetos del entorno fueron modelados en Blender y exportados a UE4 para su integración, logrando un entorno inmersivo y funcional.",
        img: "/project6.jpg",
    }
];

const ProjectPreview: React.FC = () => {
    return (
        <section id="proyectos" className="py-16">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">Proyectos destacados</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
                        >
                            <img src={project.img} alt={project.title} className="w-full object-cover" />
                            <div className="p-5">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-600 text-sm mb-6">{project.desc}</p>
                                <div className="inline-grid items-center grid-cols-2 gap-4">
                                    <a href={project.demo} className="bg-purple-600 p-3 font-bold px-5 hover:px-7 duration-200 rounded-full text-white" target="_blank" rel="noopener noreferrer">Mas Información</a>
                                    {project.demo && (<a href={project.demo} target="_blank"><Button>{project.demo_text}</Button></a>)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectPreview;