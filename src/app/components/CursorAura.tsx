"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const CursorAura = () => {
  const [enabled, setEnabled] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const softX = useSpring(mouseX, { stiffness: 100, damping: 20, mass: 0.2 });
  const softY = useSpring(mouseY, { stiffness: 100, damping: 20, mass: 0.2 });

  const sharpX = useSpring(mouseX, { stiffness: 240, damping: 26, mass: 0.15 });
  const sharpY = useSpring(mouseY, { stiffness: 240, damping: 26, mass: 0.15 });

  useEffect(() => {
    const canUseFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!canUseFinePointer) return;

    setEnabled(true);

    const onMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className='pointer-events-none fixed top-0 left-0 z-[60] w-44 h-44 rounded-full blur-3xl bg-emerald-400/25 dark:bg-emerald-300/20'
        style={{ x: softX, y: softY, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className='pointer-events-none fixed top-0 left-0 z-[61] w-4 h-4 rounded-full bg-blue-400/80 dark:bg-blue-300/80'
        style={{ x: sharpX, y: sharpY, translateX: "-50%", translateY: "-50%" }}
      />
    </>
  );
};

export default CursorAura;
