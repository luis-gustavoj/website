"use client";
import { motion } from "framer-motion";

export const WavingHand = () => (
  <motion.span
    className="inline-block"
    style={{
      transformOrigin: "70% 70%",
    }}
    animate={{
      rotate: [0, 14, -4, 14, 0],
      transition: {
        repeat: Infinity,
        duration: 2.5,
        repeatDelay: 1,
        type: "tween",
        ease: "easeInOut",
      },
    }}
  >
    👋
  </motion.span>
);
