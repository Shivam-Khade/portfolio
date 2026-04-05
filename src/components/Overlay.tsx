"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Section 1: 0% to 10% (Immediate start, gone early)
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.1], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.1], ["0%", "-20%"]);

  // Section 2: 25% to 55% (Centered at 40%)
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.4, 0.55], [0, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.55], ["20%", "-20%"]);

  // Section 3: 70% to 95% (Final section)
  const opacity3 = useTransform(scrollYProgress, [0.7, 0.82, 0.95], [0, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.7, 0.95], ["20%", "-20%"]);

  return (
    <div ref={containerRef} className="absolute inset-0 z-10 pointer-events-none h-full">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

        {/* Section 1 */}
        <motion.div
           style={{ opacity: opacity1, y: y1 }}
           className="absolute text-center flex flex-col items-center gap-4 px-6"
         >
           <div className="flex flex-col items-center gap-2 sm:gap-4">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-xl whitespace-nowrap">
              Shivam Khade.
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-gray-300 font-medium tracking-wide">
              Creative Developer.
            </p>
           </div>
         </motion.div>

        {/* Section 2 */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute left-6 sm:left-12 md:left-24 max-w-[85vw] md:max-w-lg"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-xl">
            I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">digital experiences.</span>
          </h2>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute right-6 sm:right-12 md:right-24 max-w-[85vw] md:max-w-lg text-right"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-xl">
            Bridging <br />
            <span className="italic font-light">design</span> and <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">engineering.</span>
          </h2>
        </motion.div>

      </div>
    </div>
  );
}
