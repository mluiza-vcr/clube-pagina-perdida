import { books } from "~/data/books";

export function getBookById(id: string) {
  return books.find((book) => book.id === id);
}

export function getBooksByIds(ids: string[]) {
  return books.filter((book) => ids.includes(book.id));
}
