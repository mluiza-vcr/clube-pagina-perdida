import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import { Book } from "~/data/books"; // Supondo que você tenha esse tipo de dado para os livros

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Book[]>([]);

  // Carregar favoritos do localStorage
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      const parsedFavorites: Book[] = JSON.parse(storedFavorites);
      setFavorites(parsedFavorites); // Atualiza o estado com os livros favoritos
    }
  }, []); // O useEffect roda apenas uma vez quando o componente é montado

  // Se não houver livros favoritos
  if (favorites.length === 0) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl">Você não tem livros favoritos ainda!</h2>
        <p className="text-sm mt-2">
          Adicione alguns livros aos seus favoritos.
        </p>
      </div>
    );
  }

  return (
    <div className="md:p-6">
      <h2 className="md:text-3xl font-bold mb-4">Livros Favoritos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((book) => (
          <Link to={`/livros/${book.id}`}>
            <div
              key={book.id}
              className="group bg-white dark:bg-[#2c2c2c] h-full rounded-lg shadow hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col justify-between"
            >
              <img
                src={book.coverImage}
                alt={book.title}
                className="rounded mb-3 w-full"
              />
              <h3 className="text-xl font-mono group-hover:text-[#a78b61] dark:group-hover:text-[#c8b28f]">
                {book.title}
              </h3>
              <p className="text-sm italic opacity-70 mt-2">
                {book.author} • {book.year}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
