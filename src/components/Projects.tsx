"use client";

import { motion, Variants } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Red Bull Energy",
    category: "Marketing Campaign",
    description: "A hyper-dynamic digital experience featuring buttery smooth micro-interactions and an electrifying, seamless user journey.",
    image: "/red-bull.jpg",
    link: "https://red-bull-steel.vercel.app/",
  },
  {
    id: 2,
    title: "JJK: Domain Expansion",
    category: "Anime Web Experience",
    description: "An immersive, cinematic interface that drops users into a dark fantasy realm with fluid animations and gripping visual feedback.",
    image: "/jjk.png",
    link: "https://jjk-flax.vercel.app/",
  },
  {
    id: 3,
    title: "Bus Pass System",
    category: "Transit Dashboard",
    description: "A frictionless ticketing platform designed for speed, blending intuitive navigation with a flawlessly sleek user dashboard.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    link: "https://bus-pass-system-tau.vercel.app/",
  },
  {
    id: 4,
    title: "Neon Cocktail",
    category: "Animated Landing Page",
    description: "A luxurious and visually stunning landing page for a premium speakeasy, serving up pixel-perfect aesthetics and intoxicatingly smooth scroll animations.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    link: "https://cocktails-sand.vercel.app/",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <section id="projects" className="relative z-20 bg-[#121212] pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Selected Works
          </h2>
          <p className="text-gray-400 text-lg max-w-xl">
            A deeper dive into the technical capabilities and design language that powers my recent work.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {projects.map((project) => (
            <motion.a
              key={project.id}
              variants={itemVariants}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden cursor-pointer block"
            >
              {/* Image background */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              {/* Overlay tint */}
              <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/20" />
              
              {/* Glassmorphism content */}
              <div className="relative h-[400px] sm:h-[450px] w-full p-6 md:p-8 flex flex-col justify-end">
                <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-xl transition-all duration-300 translate-y-4 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 group-hover:bg-white/15 shadow-xl">
                  <p className="text-[#a0d2eb] font-semibold text-sm mb-2 drop-shadow-md">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mt-6 flex items-center text-sm font-medium text-white gap-2 transition-transform duration-300 transform group-hover:translate-x-2">
                    View Project
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
