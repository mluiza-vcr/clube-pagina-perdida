import { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";

// Tipo para representar um comentário
type Comment = {
  id: number;
  text: string;
};

export default function BookComments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

  // Carregar comentários do localStorage ao montar o componente
  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  // Adicionar um novo comentário
  const addComment = () => {
    if (!newComment.trim()) return;

    const newCommentObj: Comment = {
      id: Date.now(),
      text: newComment.trim(),
    };

    const updatedComments = [...comments, newCommentObj];
    setComments(updatedComments);
    setNewComment("");
    localStorage.setItem("comments", JSON.stringify(updatedComments));
  };

  // Excluir um comentário
  const deleteComment = (id: number) => {
    const updatedComments = comments.filter((c) => c.id !== id);
    setComments(updatedComments);
    localStorage.setItem("comments", JSON.stringify(updatedComments));
  };

  return (
    <div className="bg-poetic-light-bg dark:bg-poetic-dark-bg">
      <h2 className="text-2xl font-serif text-poetic-light-link dark:text-poetic-dark-link mb-4">
        Comentários
      </h2>

      <div className="mb-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Escreva seu comentário..."
          className="w-full p-4 border border-poetic-light-accent/50 dark:border-poetic-dark-accent/50 bg-opacity-50 bg-poetic-light-bg dark:bg-poetic-dark-bg text-poetic-light-text dark:text-poetic-dark-text rounded-lg focus:outline-none focus:ring-2 focus:ring-poetic-light-accent dark:focus:ring-poetic-dark-accent transition"
          rows={4}
        />
        <button
          onClick={addComment}
          className="mt-3 px-4 py-2 bg-poetic-light-accent text-poetic-light-bg dark:bg-poetic-dark-accent dark:text-poetic-dark-bg rounded-lg font-medium hover:bg-opacity-90 transition"
        >
          Adicionar comentário
        </button>
      </div>

      <div className="space-y-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="relative p-4 bg-opacity-80 bg-poetic-light-bg dark:bg-poetic-dark-bg border border-poetic-light-accent/30 dark:border-poetic-dark-accent/30 rounded-lg"
            >
              <p className="text-poetic-light-text dark:text-poetic-dark-text whitespace-pre-wrap">
                {comment.text}
              </p>
              <button
                onClick={() => deleteComment(comment.id)}
                className="absolute top-1/2 transform -translate-y-1/2 right-2 p-1 rounded hover:bg-poetic-light-accent/20 dark:hover:bg-poetic-dark-accent/20 transition"
                aria-label="Excluir comentário"
              >
                <Trash2 className="w-5 h-5 text-poetic-light-link dark:text-poetic-dark-link" />
              </button>
            </div>
          ))
        ) : (
          <p className="text-poetic-light-text dark:text-poetic-dark-text italic">
            Nenhum comentário ainda.
          </p>
        )}
      </div>
    </div>
  );
}
