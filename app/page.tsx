"use client";

import { motion } from "framer-motion";
import { Particles } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useCallback, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Home() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Correo enviado: ${email}`);
    setEmail("");
    setModalOpen(false);
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-start text-center overflow-hidden bg-black">

      {/* PARTÍCULAS TIPO CIRCUITOS */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#000000" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true
            },
            modes: { repulse: { distance: 100 } },
          },
          particles: {
            color: { value: ["#00F0FF", "#8A2BE2"] },
            links: { enable: true, color: "#00F0FF", distance: 120, opacity: 0.3, width: 1 },
            move: { enable: true, speed: 1, outModes: { default: "bounce" } },
            number: { value: 120, density: { enable: true, area: 1000 } },
            opacity: { value: 0.7 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
          fullScreen: { enable: true, zIndex: -1 } // asegura que quede de fondo
        }}
      />

      {/* BARRA SUPERIOR */}
      <header className="w-full fixed top-0 left-0 flex justify-between items-center bg-black z-50 py-4 px-6 shadow-md">
        <ScrollLink
          to="home"
          smooth={true}
          duration={700}
          className="text-white font-bold text-2xl cursor-pointer hover:text-cyan-400"
        >
          BLAKBOX
        </ScrollLink>

        <nav className="flex gap-6 items-center">
          <ScrollLink
            to="blockchain"
            smooth={true}
            duration={700}
            className="text-white font-bold cursor-pointer hover:text-cyan-400"
          >
            Blockchain
          </ScrollLink>

          <ScrollLink
            to="ia"
            smooth={true}
            duration={700}
            className="text-white font-bold cursor-pointer hover:text-purple-500"
          >
            IA
          </ScrollLink>

          <button
            onClick={() => setModalOpen(true)}
            className="px-4 py-2 bg-yellow-500 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-400 transition-colors"
          >
            Ingreso
          </button>
        </nav>
      </header>

      {/* HOME */}
      <section id="home" className="flex flex-col items-center justify-center min-h-screen pt-24">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-6xl md:text-7xl font-bold mb-4 tracking-widest text-white"
        >
          BLAKBOX
        </motion.h1>

        <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8, duration: 1 }}
  className="text-lg md:text-xl text-gray-300 mb-10 max-w-full" // <- tamaño reducido y ancho completo
>
  Portal de aprendizaje y servicios en Blockchain e Inteligencia Artificial.
</motion.p>

        <div className="flex gap-6">
          <ScrollLink
            to="blockchain"
            smooth={true}
            duration={700}
            className="px-6 py-3 bg-cyan-500 text-black font-bold rounded-lg shadow-lg hover:bg-cyan-400 cursor-pointer"
          >
            Explorar BlockChain
          </ScrollLink>

          <ScrollLink
            to="ia"
            smooth={true}
            duration={700}
            className="px-6 py-3 bg-purple-600 text-white font-bold rounded-lg shadow-lg hover:bg-purple-500 cursor-pointer"
          >
            Explorar IA
          </ScrollLink>
        </div>
      </section>

      {/* SECCIONES BLOCKCHAIN E IA */}
      <section id="blockchain" className="min-h-screen flex flex-col items-center justify-start bg-gray-900 text-white pt-24 px-6">
        <motion.h2 initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="text-5xl font-bold mb-6">
          Blockchain
        </motion.h2>
        <motion.div className="grid md:grid-cols-3 gap-6 text-left" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer">
            <h3 className="text-2xl font-bold mb-2">Clase Gratuita</h3>
            <p>Introducción a Bitcoin y Blockchain.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer">
            <h3 className="text-2xl font-bold mb-2">Clase de Pago</h3>
            <p>Curso completo de Blockchain avanzado.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer">
            <h3 className="text-2xl font-bold mb-2">Mentoría Privada</h3>
            <p>Sesiones personalizadas según tu nivel.</p>
          </div>
        </motion.div>
      </section>

      <section id="ia" className="min-h-screen flex flex-col items-center justify-start bg-gray-800 text-white pt-24 px-6">
        <motion.h2 initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="text-5xl font-bold mb-6">
          Inteligencia Artificial
        </motion.h2>
        <motion.div className="grid md:grid-cols-3 gap-6 text-left" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
          <div className="bg-gray-700 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer">
            <h3 className="text-2xl font-bold mb-2">Clase Gratuita</h3>
            <p>IA para productividad y organización.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer">
            <h3 className="text-2xl font-bold mb-2">Clase de Pago</h3>
            <p>Curso completo de herramientas de IA.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform cursor-pointer">
            <h3 className="text-2xl font-bold mb-2">Mentoría Privada</h3>
            <p>Sesiones personalizadas para tus proyectos.</p>
          </div>
        </motion.div>
      </section>

      {/* MODAL DE INGRESO */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-gray-900 rounded-xl p-8 w-96 text-center"
          >
            <h2 className="text-2xl font-bold mb-4 text-white">Ingreso</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:border-cyan-400"
                required
              />
              <button type="submit" className="px-4 py-2 bg-cyan-500 text-black font-bold rounded-lg hover:bg-cyan-400 transition-colors">
                Enviar
              </button>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-400 transition-colors"
              >
                Cerrar
              </button>
            </form>
          </motion.div>
        </div>
      )}

    </main>
  );
}