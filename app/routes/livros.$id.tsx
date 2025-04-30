import {
  useParams,
  Link,
  useLoaderData,
  json,
  MetaFunction,
} from "@remix-run/react";
import { Book, books } from "../data/books";
import { motion } from "framer-motion";
import { LoaderFunction } from "@remix-run/node";
import BookDetailCard from "~/components/BookDetailCard";

export const loader: LoaderFunction = ({ params }) => {
  const book = books.find((b) => b.id === params.id);

  if (!book) {
    throw new Response("Livro não encontrado", { status: 404 });
  }

  return json(book);
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: data.title }];
};

export default function BookDetail() {
  const book = useLoaderData<Book>();

  return (
    <motion.div
      className="max-w-4xl mx-auto p-6"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link
        to="/"
        className="inline-block mb-6 text-poetic-light-link dark:text-poetic-dark-link hover:underline"
      >
        ← Voltar
      </Link>

      <BookDetailCard book={book} />
    </motion.div>
  );
}
