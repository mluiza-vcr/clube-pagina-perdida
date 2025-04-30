import { BookOpen, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-gray-600 dark:text-gray-400 flex flex-col items-center gap-2">
      <div className="flex items-center gap-2">
        <span>
          {" "}
          © {new Date().getFullYear()} - Desenvolvido por Maria Luiza Rodrigues
        </span>
        <BookOpen className="w-4 h-4" />
      </div>
      <div className="flex gap-4 mt-1">
        <a
          href="https://github.com/mluiza-vcr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-poetic-light-link dark:hover:text-poetic-dark-link"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/mluiza-vcr/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-poetic-light-link dark:hover:text-poetic-dark-link"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
}
