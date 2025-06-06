// src/components/Education.tsx
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaTools,
  FaUniversity,
  FaGlobeAmericas,
} from "react-icons/fa";

const educationData = [
  {
    icon: <FaUniversity className="text-white w-5 h-5" />,
    title: "Ingeniería Multimedia",
    subtitle: "Universidad Simón Bolívar · 9° semestre (2021 - Presente)",
    note: "Lo mejor de muchos mundos.",
  },
  {
    icon: <FaTools className="text-white w-5 h-5" />,
    title: "Técnico en Mantenimiento de Computadores",
    subtitle: "Colegio Campestre Comfaoriente · Bachiller Técnico (2020)",
    note: "Inicié con fundamentos de hardware, sistemas y lógica digital.",
  },
  {
    icon: <FaTools className="text-white w-5 h-5" />,
    title: "Bachiller Técnico",
    subtitle: "Colegio Campestre Comfaoriente (2020)",
    note: "Inicié con fundamentos de hardware, sistemas y lógica digital.",
  },
  {
    icon: <FaGlobeAmericas className="text-white w-5 h-5" />,
    title: "Let's talk",
    subtitle:
      "Jamestown English Center · Certificación B2 Cambridge (IELTS, 2020)",
    note: "Me acostumbré a vivir en inglés sin darme cuenta.",
  },
  {
    icon: <FaLaptopCode className="text-white w-5 h-5" />,
    title: "Curioso por defecto",
    subtitle:
      "He aprendido explorando documentación, libros, proyectos reales y comunidad online.",
    note: "Si algo me interesa, investigo hasta entenderlo.",
  },
];

export default function Education() {
  return (
    <section className="pb-20 pt-10 md:py-20 px-6" id="educacion">
      <div className="max-w-4xl md:max-w-2xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Trayectoria académica
        </motion.h2>

        <motion.p
          className="mb-20 text-center text-gray-700 text-base max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          No me conformo con lo que ya sé. Aprender, para mí, es una forma de avanzar, no un requisito.
        </motion.p>

        <div className="relative border-l-2 border-indigo-200 pl-6 space-y-12">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <div className="absolute -top-6 left-5 w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-sm">
                {item.icon}
              </div>
              <div className="bg-gray-50 p-5 pt-8 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.subtitle}</p>
                <p className="text-sm text-indigo-600 mt-2 italic">{item.note}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-16 text-center text-gray-700 text-base max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          La educación no termina en un aula. He aprendido a integrar conocimiento técnico,
          creatividad y habilidades de comunicación para construir soluciones con impacto real.
        </motion.p>
      </div>
    </section>
  );
}