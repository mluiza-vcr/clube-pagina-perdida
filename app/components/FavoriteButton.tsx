import { Heart, HeartOff } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function FavoriteButton({
  isFavorite,
  toggleFavorite,
}: {
  isFavorite: boolean;
  toggleFavorite: any;
}) {
  const [isPulsing, setIsPulsing] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    setIsPulsing(true); // Ativa o efeito de pulsação
    toggleFavorite(e);

    // Depois de um tempo, desativa o efeito de pulsação
    setTimeout(() => {
      setIsPulsing(false);
    }, 300); // Tempo de duração da pulsação
  };

  return (
    <motion.button
      onClick={handleClick}
      whileTap={{ scale: 0.9 }} // Efeito de diminuição ao clicar
      className="p-2 rounded-full transition hover:bg-poetic-light-accent/10 dark:hover:bg-poetic-dark-accent/10"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick(e as unknown as React.MouseEvent);
        }
      }}
      aria-pressed={isFavorite}
    >
      <motion.div
        animate={{ scale: isPulsing ? 1.3 : 1 }} // Pulsação no coração
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 10,
          duration: 0.3, // Tempo de animação da pulsação
        }}
      >
        {isFavorite ? (
          <Heart className="w-5 h-5 text-pink-700 fill-pink-700" />
        ) : (
          <HeartOff className="w-5 h-5 text-gray-400" />
        )}
      </motion.div>
    </motion.button>
  );
}
