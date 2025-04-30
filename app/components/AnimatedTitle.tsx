import { useLocation } from "@remix-run/react";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const title = "Clube da Página Perdida";

export default function AnimatedTitle() {
  const location = useLocation();
  const [key, setKey] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setKey((prev) => prev + 1);
  }, [location.pathname]);

  useEffect(() => {
    // Cria o objeto de áudio só uma vez
    if (!audioRef.current) {
      audioRef.current = new Audio("/sounds/type-key.mp3");
    }
  }, []);

  const handlePlaySound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});

      // Parar o áudio após 4 segundos
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
      }, 3000);
    }
  };

  return (
    <h1
      key={key}
      className="text-2xl mx-auto md:mx-0 md:text-4xl tracking-wide text-poetic-light-link dark:text-poetic-dark-link font-mono flex"
    >
      {title.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.05 }}
          onAnimationStart={handlePlaySound}
          className={char === " " ? "inline-block w-2" : ""}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        className="ml-1 animate-blink"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
      >
        |
      </motion.span>
    </h1>
  );
}
