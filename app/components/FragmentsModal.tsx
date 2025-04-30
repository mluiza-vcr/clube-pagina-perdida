import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import { useState } from "react";

type ModalTrechosProps = {
  title: string;
  fragments: string[];
};

export default function ModalTrechos({ title, fragments }: ModalTrechosProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-poetic-light-link dark:bg-poetic-dark-link text-white py-2 px-4 rounded shadow hover:brightness-110 transition"
      >
        Ler trechos
      </button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          aria-hidden="true"
        />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="max-w-xl w-full rounded-xl p-6 bg-poetic-light-bg text-poetic-light-text dark:bg-poetic-dark-bg dark:text-poetic-dark-text shadow-xl relative space-y-4">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 p-2 rounded-full hover:bg-poetic-light-accent/20 dark:hover:bg-poetic-dark-accent/20 transition"
              aria-label="Fechar"
            >
              <X className="w-5 h-5 text-poetic-light-link dark:text-poetic-dark-link" />
            </button>

            <Dialog.Title className="text-2xl font-serif text-poetic-light-accent dark:text-poetic-dark-accent">
              {title}
            </Dialog.Title>

            <div className="space-y-4 text-base leading-relaxed font-light">
              {fragments.map((frag, index) => (
                <p
                  key={index}
                  className="italic border-l-4 pl-4 border-poetic-light-accent/40 dark:border-poetic-dark-accent/40"
                >
                  “{frag}”
                </p>
              ))}
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
