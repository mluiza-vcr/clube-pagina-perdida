import { Book } from "~/data/books";
import { FavoriteButton } from "./FavoriteButton";
import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";

export default function BookCard({ book }: { book: Book }) {
  const [isFavorite, setIsFavorite] = useState(false);

  // Carregar favoritos do localStorage ao montar o componente
  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    const favorites: Book[] = stored ? JSON.parse(stored) : [];

    // Verificar se o livro já está favoritado
    const alreadyFavorited = favorites.some((fav) => fav.id === book.id);
    setIsFavorite(alreadyFavorited);
  }, [book.id]);

  // Função para alternar o status de favorito
  function toggleFavorite(e: React.MouseEvent) {
    e.preventDefault(); // Impede navegação ao clicar na estrela

    const stored = localStorage.getItem("favorites");
    const favorites: Book[] = stored ? JSON.parse(stored) : [];

    // Verificar se o livro já está favoritado
    const isAlreadyFavorited = favorites.some((fav) => fav.id === book.id);

    let updatedFavorites: Book[];

    if (isAlreadyFavorited) {
      // Remover do favoritos
      updatedFavorites = favorites.filter((fav) => fav.id !== book.id);
    } else {
      // Adicionar aos favoritos
      updatedFavorites = [...favorites, book];
    }

    // Atualizar localStorage e o estado
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(!isAlreadyFavorited);
  }

  return (
    <div
      key={book.id}
      className="group bg-white dark:bg-[#2c2c2c] rounded-lg shadow hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col justify-between"
    >
      <div className="mb-2 -mt-2 flex justify-end">
        <FavoriteButton
          isFavorite={isFavorite}
          toggleFavorite={toggleFavorite}
        />
      </div>
      <img
        src={book.coverImage}
        alt={book.title}
        className="rounded mb-3 w-full"
      />

      <Link to={`/livros/${book.id}`} className="block flex-grow space-y-2">
        <h2 className="text-xl font-mono group-hover:text-[#a78b61] dark:group-hover:text-[#c8b28f]">
          {book.title}
        </h2>
        <p className="text-sm italic opacity-70">
          {book.author} • {book.year}
        </p>
        <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
          {book.description}
        </p>
      </Link>
    </div>
  );
}
