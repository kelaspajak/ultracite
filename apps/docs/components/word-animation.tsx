"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const words = ["Wajib Pajak", "Konsultan Pajak", "Admin Pajak", "Fiskus"];

function useWordCycle(words: string[], interval: number) {
  const [index, setIndex] = useState(0);
  const [isInitial, setIsInitial] = useState(true);

  useEffect(() => {
    if (isInitial) {
      setIndex(Math.floor(Math.random() * words.length));
      setIsInitial(false);
      return;
    }

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval, isInitial]);

  return words[index];
}

export function WordAnimation() {
  const word = useWordCycle(words, 2100);

  return (
    <AnimatePresence mode="wait">
      <motion.div className="inline-block text-primary" key={word}>
        {word?.split("").map((char, index) => (
          <motion.span
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            initial={{ y: 10, opacity: 0 }}
            key={`${word}-${char}-${index.toString()}`}
            style={{ display: "inline-block", whiteSpace: "pre" }}
            transition={{
              duration: 0.15,
              delay: index * 0.015,
              ease: "easeOut",
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
