"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  // It's helpful to track the scroll on the same container, or document scroll if this is full page
  const { scrollYProgress } = useScroll();

  // Section 1: 0% to 8% fades out
  const opacity1 = useTransform(scrollYProgress, [0, 0.04, 0.08], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.08], ["0%", "-30%"]);

  // Section 2: fades in at 12%, peaks at 25%, fades out at 38%
  const opacity2 = useTransform(scrollYProgress, [0.12, 0.25, 0.38], [0, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.12, 0.38], ["30%", "-30%"]);

  // Section 3: fades in at 42%, peaks at 55%, fades out at 68%
  const opacity3 = useTransform(scrollYProgress, [0.42, 0.55, 0.68], [0, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.42, 0.68], ["30%", "-30%"]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none h-full">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

        {/* Section 1 */}
        <motion.div
           style={{ opacity: opacity1, y: y1 }}
           className="absolute text-center flex flex-col items-center gap-4 px-6"
         >
           <div className="hero-reveal flex flex-col items-center gap-2 sm:gap-4">
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
