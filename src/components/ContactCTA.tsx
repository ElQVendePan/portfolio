// src/components/ContactCTA.tsx
import React from "react";

const ContactCTA: React.FC = () => {
  return (
    <section className="py-20 text-center bg-indigo-600 text-white">
      <h2 className="text-3xl font-bold mb-4">¿Hacemos algo increíble juntos?</h2>
      <p className="mb-6">Estoy disponible para colaboraciones, freelance o proyectos creativos.</p>
      <a
        href="#contacto"
        className="bg-white text-indigo-700 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition"
      >
        Contáctame
      </a>
    </section>
  );
};

export default ContactCTA;
