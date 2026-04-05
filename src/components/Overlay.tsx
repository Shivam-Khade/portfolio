"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Overlay() {
  // It's helpful to track the scroll on the same container, or document scroll if this is full page
  const { scrollYProgress } = useScroll();

  // Section 1: 0% to 15% fades out
  const opacity1 = useTransform(scrollYProgress, [0, 0.08, 0.14], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.14], ["0%", "-50%"]);

  // Section 2: fades in at 20%, peaks at 30%, fades out at 40%
  const opacity2 = useTransform(scrollYProgress, [0.18, 0.28, 0.38], [0, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.18, 0.38], ["50%", "-50%"]);

  // Section 3: fades in at 50%, peaks at 60%, fades out at 70%
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.52, 0.65], [0, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.4, 0.65], ["50%", "-50%"]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none h-full">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

        {/* Section 1 */}
        <motion.div
           style={{ opacity: opacity1, y: y1 }}
           className="absolute text-center flex flex-col items-center gap-4"
         >
           <div className="hero-reveal flex flex-col items-center gap-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-xl">
              Shivam Khade.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium tracking-wide">
              Creative Developer.
            </p>
           </div>
         </motion.div>

        {/* Section 2 */}
        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute left-8 md:left-24 max-w-lg"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-xl">
            I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">digital experiences.</span>
          </h2>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute right-8 md:right-24 max-w-lg text-right"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-xl">
            Bridging <br />
            <span className="italic font-light">design</span> and <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">engineering.</span>
          </h2>
        </motion.div>

      </div>
    </div>
  );
}
