// src/components/AboutMe.tsx
import React from "react";

const AboutMe: React.FC = () => {
  return (
    <section className="bg-indigo-50 py-14">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Sobre mí</h2>
        <p className="text-gray-700 leading-relaxed">
          Soy un ingeniero multimedia apasionado por la innovación digital. Combino diseño, código
          y narrativa para crear experiencias interactivas que impacten. Me especializo en
          desarrollo creativo, edición de video, realidad aumentada y más.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;