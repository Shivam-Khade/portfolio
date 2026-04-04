"use client";

import { motion, Variants } from "framer-motion";
import { Search, Map, Zap } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Discovery",
    description: "Understand your goals, challenges, and creative direction.",
    icon: <Search className="w-8 h-8 text-white" />,
  },
  {
    number: 2,
    title: "Strategy & Blueprint",
    description: "Design the roadmap — technologies, deliverables, and growth plan.",
    icon: <Map className="w-8 h-8 text-white" />,
  },
  {
    number: 3,
    title: "Execution & Integration",
    description: "Code, deploy, and ensure transparency and high-impact reality.",
    icon: <Zap className="w-8 h-8 text-white" />,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  },
};

export default function Process() {
  return (
    <section id="process" className="relative z-20 bg-[#121212] py-32 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            How I Work
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-medium tracking-wide">
            From concept to high-impact reality.
          </p>
        </motion.div>

        {/* Steps Container */}
        <div className="relative">
          {/* Horizontal Connector Line (Desktop) */}
          <div className="absolute top-12 left-0 w-full h-[1px] bg-white/5 hidden md:block" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative z-10"
          >
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Container */}
                <div className="relative mb-10 transition-transform duration-500 group-hover:scale-110">
                  <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-xl shadow-2xl relative">
                    {step.icon}
                    
                    {/* Purple Badge */}
                    <div className="absolute -top-1 -right-1 w-7 h-7 bg-purple-600 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg ring-4 ring-[#121212]">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Subtle Glow */}
                  <div className="absolute inset-0 bg-purple-500/0 rounded-full blur-2xl transition-all duration-500 group-hover:bg-purple-500/10 -z-10" />
                </div>

                {/* Text Content */}
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed max-w-[280px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
