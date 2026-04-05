"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 content-reveal"
    >
      <nav className="flex items-center gap-1 p-1.5 rounded-full bg-[#121212]/50 backdrop-blur-md border border-white/10 shadow-2xl">
        <Link 
          href="#projects" 
          className="px-5 py-2 rounded-full bg-white/10 text-white text-sm font-medium shadow-sm transition-all"
        >
          Work
        </Link>
        <Link 
          href="#tech-stack" 
          className="px-5 py-2 rounded-full text-gray-400 hover:text-white hover:bg-white/5 text-sm font-medium transition-all"
        >
          Tech Stack
        </Link>
        <Link 
          href="#process" 
          className="px-5 py-2 rounded-full text-gray-400 hover:text-white hover:bg-white/5 text-sm font-medium transition-all"
        >
          Process
        </Link>
        <Link 
          href="#contact" 
          className="px-5 py-2 rounded-full text-gray-400 hover:text-white hover:bg-white/5 text-sm font-medium transition-all"
        >
          Contact
        </Link>
      </nav>
    </motion.header>
  );
}
