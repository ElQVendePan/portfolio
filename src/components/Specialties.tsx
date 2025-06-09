// src/components/Skills.tsx
import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiPhp,
  SiTailwindcss,
  SiBlender,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFigma,
  SiUnity,
  SiUnrealengine,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiPhp, name: "PHP" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiFigma, name: "Figma" },
  { icon: SiAdobephotoshop, name: "Photoshop" },
  { icon: SiAdobeillustrator, name: "Illustrator" },
  { icon: SiUnity, name: "Unity" },
  { icon: SiUnrealengine, name: "Unreal Engine" },
  { icon: SiBlender, name: "Blender" },
  { icon: SiAdobeaftereffects, name: "After Effects" },
  { icon: SiAdobepremierepro, name: "Premiere Pro" },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const Skills: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white/40 to-transparent" id="specialties">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Habilidades & Herramientas
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-10 text-base md:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Las herramientas cambian, la creatividad se adapta. Estas son mis favoritas (por ahora).
        </motion.p>

        <div className="grid grid-cols-3 md:grid-cols-7 gap-6 justify-items-center">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={i}
                className="flex flex-col items-center gap-2 p-4 w-28 h-28 bg-gray-50 hover:bg-indigo-100 rounded-xl shadow-md transition-all hover:scale-105"
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={itemVariants}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center w-12 h-12 text-indigo-600">
                  <Icon size={40} />
                </div>
                <p className="text-sm font-medium text-gray-700 text-center">{skill.name}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;