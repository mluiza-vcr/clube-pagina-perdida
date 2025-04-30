import { Moon, Sun, BookOpen } from "lucide-react";
import AnimatedTitle from "./AnimatedTitle";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [dark, setDark] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [rotate, setRotate] = useState(false); // Adicionar o estado de rotação

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        setDark(storedTheme === "dark");
      } else {
        setDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
      }
    }
  }, []);

  useEffect(() => {
    if (dark !== null) {
      document.documentElement.classList.toggle("dark", dark);
      localStorage.setItem("theme", dark ? "dark" : "light");
      setIsLoading(false);
    }
  }, [dark]);

  const toggleTheme = () => {
    setRotate(true); // Ativar a rotação
    setDark((prev) => (prev === null ? true : !prev));

    // Atrasar a remoção da rotação para garantir que a animação aconteça
    setTimeout(() => setRotate(false), 300); // 300ms para terminar a animação
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <motion.div
          className="text-gray-800 dark:text-gray-200"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <BookOpen className="w-12 h-12" />
        </motion.div>
      </div>
    );
  }

  return (
    <header className="p-6 flex items-center justify-between w-full">
      <AnimatedTitle />
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full transition-all hover:scale-110 hover:bg-poetic-light-accent/10 dark:hover:bg-poetic-dark-accent/10"
        aria-label={dark ? "trocar para luz" : "trocar para noite"}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={dark ? "sun" : "moon"}
            initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className={rotate ? "rotate-180" : ""} // Adicionar rotação
          >
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.div>
        </AnimatePresence>
      </button>
    </header>
  );
}
