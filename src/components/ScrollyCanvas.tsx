"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 90;

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      // Pad to 2 digits: 00, 01, ..., 89
      const frameNum = i.toString().padStart(2, "0");
      img.src = `/sequence/frame_${frameNum}_delay-0.067s.webp`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === 1) {
          // Draw first frame as soon as it's ready
          const canvas = canvasRef.current;
          if (canvas) {
            const ctx = canvas.getContext("2d");
            if (ctx) drawImageToCanvas(img, ctx, canvas);
          }
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const drawImageToCanvas = (
    img: HTMLImageElement,
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement
  ) => {
    if (!img.complete || img.naturalWidth === 0) return;

    // Object-fit: cover logic
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === 0) return;

    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.max(0, Math.floor(latest * FRAME_COUNT))
    );

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d", { alpha: false });
      if (ctx) {
        drawImageToCanvas(images[frameIndex], ctx, canvas);
      }
    }
  });

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        // Adjust logical size for high-DPI displays if necessary,
        // but for simplicity, match style width/height
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // Redraw current frame
        if (images.length > 0) {
          const latestScroll = scrollYProgress.get();
          const frameIndex = Math.min(
            FRAME_COUNT - 1,
            Math.max(0, Math.floor(latestScroll * FRAME_COUNT))
          );
          const ctx = canvas.getContext("2d", { alpha: false });
          if (ctx) drawImageToCanvas(images[frameIndex], ctx, canvas);
        }
      }
    };
    
    // Initial size
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, scrollYProgress]);

  return (
    <div ref={wrapperRef} className="absolute inset-0 z-0 h-full w-full pointer-events-none">
      <div className="sticky top-0 h-screen w-full">
        <canvas
          ref={canvasRef}
          className="h-full w-full block bg-[#121212]"
        />
        {/* Adds a slight gradient at the bottom so it fades into the next section cleanly */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#121212] to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
