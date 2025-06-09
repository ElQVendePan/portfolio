// src/components/Education.tsx
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaTools,
  FaUniversity,
  FaGlobeAmericas,
  FaSmileBeam,
  FaUsers,
  FaComments,
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
    <section id="educacion" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto bg-gray-50 rounded-3xl shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left column: About Me */}
        <div className="p-10 flex flex-col justify-center bg-indigo-600 text-white">
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Sobre mí
          </motion.h2>

          <motion.p
            className="text-base leading-relaxed mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Mi nombre es <strong>Santiago Sepúlveda</strong>, tengo 21 años y una profunda fascinación por la tecnología y la creatividad. Desde mis primeros dibujos en Paint, supe que este mundo era para mí.
          </motion.p>

          <motion.p
            className="text-base leading-relaxed mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Descubrí la programación con PHP en el colegio, y la animación 3D me llevó a escoger esta carrera. Hoy estudio desarrollo web de forma autodidacta, mientras me especializo en animación.
          </motion.p>

          {/* Separador */}
          <motion.hr
            className="my-6 border-t border-white/30"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ transformOrigin: "left" }}
          />

          {/* Soft Skills */}
          <div className="space-y-4">
            <motion.div
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <FaSmileBeam className="w-5 h-5 mt-1" />
              <span>Empatía y adaptabilidad en contextos diversos.</span>
            </motion.div>
            <motion.div
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FaUsers className="w-5 h-5 mt-1" />
              <span>Fuerte compromiso con el trabajo en equipo.</span>
            </motion.div>
            <motion.div
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <FaComments className="w-5 h-5 mt-1" />
              <span>Comunicación clara, directa y con propósito.</span>
            </motion.div>
          </div>
        </div>

        {/* Right column: Education */}
        <div className="p-10">
          <motion.h2
            className="text-3xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Trayectoria académica
          </motion.h2>

          <motion.p
            className="text-gray-600 mb-10 text-base leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            Aprender es parte de mi forma de vivir. No solo estudio por necesidad: lo hago por pasión.
          </motion.p>

          <div className="space-y-8">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-indigo-600 flex items-center justify-center shadow">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.subtitle}</p>
                  <p className="text-sm italic text-indigo-600 mt-1">{item.note}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
