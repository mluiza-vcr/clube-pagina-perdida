import { Heart, HeartOff } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Book } from "~/data/books";

export function FavoriteButton({
  isFavorite,
  toggleFavorite,
}: {
  isFavorite: boolean;
  toggleFavorite: any;
}) {
  return (
    <motion.button
      onClick={toggleFavorite}
      whileTap={{ scale: 0.9 }}
      className="p-2 rounded-full transition hover:bg-poetic-light-accent/10 dark:hover:bg-poetic-dark-accent/10"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleFavorite(e as unknown as React.MouseEvent);
        }
      }}
      aria-pressed={isFavorite}
    >
      {isFavorite ? (
        <Heart className="w-5 h-5 text-pink-700 fill-pink-700" />
      ) : (
        <HeartOff className="w-5 h-5 text-gray-400" />
      )}
    </motion.button>
  );
}
