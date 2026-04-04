"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "Bootstrap", icon: "/tech/bootstrap.svg" },
  { name: "Tailwind CSS", icon: "/tech/tailwindcss.svg" },
  { name: "React JS", icon: "/tech/react.svg" },
  { name: "Node JS", icon: "/tech/nodedotjs.svg" },
  { name: "Spring Boot", icon: "/tech/springboot.svg" },
  { name: "MySQL", icon: "/tech/mysql.svg" },
  // Duplicate for seamless infinite scrolling
  { name: "Bootstrap", icon: "/tech/bootstrap.svg" },
  { name: "Tailwind CSS", icon: "/tech/tailwindcss.svg" },
  { name: "React JS", icon: "/tech/react.svg" },
  { name: "Node JS", icon: "/tech/nodedotjs.svg" },
  { name: "Spring Boot", icon: "/tech/springboot.svg" },
  { name: "MySQL", icon: "/tech/mysql.svg" },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative z-20 bg-[#121212] min-h-[40vh] pt-16 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Tech Stack
          </h2>
          <p className="text-gray-400 text-lg max-w-xl">
            The core technologies shaping the speed, architecture, and interactivity of my digital experiences.
          </p>
        </motion.div>
      </div>

      <div className="relative flex whitespace-nowrap overflow-hidden border-y border-white/5 py-8">
        {/* Gradients to fade edges */}
        <div className="absolute top-0 bottom-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#121212] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#121212] to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-16 md:gap-32 items-center pr-16 md:pr-32 w-max animate-marquee border-y border-white/10 py-12"
        >
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-[120px] md:min-w-[180px] opacity-100 hover:scale-125 cursor-pointer transition-all duration-500"
              title={tech.name}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="h-16 w-16 md:h-24 md:w-24 object-contain"
                loading="eager"
              />
              <span className="mt-4 text-xs font-medium text-gray-500 uppercase tracking-widest">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
