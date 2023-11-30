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
        duration: 1.5,
        type: "tween",
        bounce: 0.2,
      },
    }}
  >
    👋
  </motion.span>
);
