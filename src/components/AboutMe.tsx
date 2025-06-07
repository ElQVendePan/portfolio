import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaHeart, FaLightbulb } from 'react-icons/fa';

interface AboutMeProps {
  photoUrl: string;
}

const AboutMe: React.FC<AboutMeProps> = ({ photoUrl }) => {
  return (
    <section className="pb-20 md:pb-6 pt-10 md:pt-20 px-6" id="aboutme">
      <div className="max-w-4xl md:max-w-2xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Sobre mí
        </motion.h2>

        <motion.p
          className="mb-16 text-center text-gray-700 text-base max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          Soy una persona apasionada por aprender y compartir conocimiento, con
          un enfoque humano y curioso sobre la vida. Me gusta equilibrar el
          desarrollo profesional con mis intereses personales, buscando siempre
          crecer en ambos ámbitos.
        </motion.p>

        <div className="relative border-l-2 border-indigo-200 pl-6 space-y-12 flex flex-col md:flex-row md:items-center md:space-x-12 md:space-y-0">
          <motion.div
            className="relative flex-shrink-0 w-48 h-48 rounded-xl overflow-hidden shadow-lg border-4 border-indigo-600"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src={photoUrl}
              alt="Foto personal"
              className="object-cover w-full h-full"
            />
          </motion.div>

          <motion.div
            className="flex-grow"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-6 left-5 w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-sm text-white">
              <FaUser className="w-6 h-6" />
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Más allá del código
              </h3>
              <p className="text-gray-700 mb-4">
                Disfruto la lectura, la música y la naturaleza. Creo que
                encontrar tiempo para desconectarse y recargar la mente es
                fundamental para mantener la creatividad y la motivación.
              </p>

              <ul className="flex space-x-8 text-indigo-600">
                <li className="flex items-center space-x-2">
                  <FaHeart />
                  <span>Empatía</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaLightbulb />
                  <span>Creatividad</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;