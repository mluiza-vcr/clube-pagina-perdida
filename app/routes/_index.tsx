import type { MetaFunction } from "@remix-run/node";
import { books } from "../data/books";
import BookCard from "~/components/BookCard";

export const meta: MetaFunction = () => {
  return [{ title: "Clube da Página Perdida" }];
};

export default function BooksList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book) => (
        <BookCard book={book} key={book.id} />
      ))}
    </div>
  );
}
