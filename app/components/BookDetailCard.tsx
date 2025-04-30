import { books } from "~/data/books";
import { FavoriteButton } from "./FavoriteButton";
import { useEffect, useState } from "react";
import BookComments from "./BookComments";

type Book = (typeof books)[number];

export default function BookDetailCard({ book }: { book: Book }) {
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

  if (!book) return <p className="p-8">Livro não encontrado.</p>;
  return (
    <>
      <div className="grid md:grid-cols-2 gap-8">
        <img
          src={book.coverImage}
          alt={book.title}
          className="w-full rounded shadow-lg"
        />

        <div>
          <h1 className="text-3xl font-mono text-poetic-light-link dark:text-poetic-dark-link mb-2">
            {book.title}
          </h1>
          <p className="italic text-sm mb-4 text-gray-700 dark:text-gray-300">
            {book.author}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Publicado em {book.year}
          </p>
          <p className="leading-relaxed text-gray-800 dark:text-gray-200">
            {book.description}
          </p>
          <div className="flex justify-end">
            <FavoriteButton
              isFavorite={isFavorite}
              toggleFavorite={toggleFavorite}
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <BookComments />
      </div>
    </>
  );
}
