import Footer from "./Footer";
import Header from "./Header";

export function GlobalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="transition-colors duration-700 font-mono bg-poetic-light-bg text-poetic-light-text dark:bg-poetic-dark-bg dark:text-poetic-dark-text min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-6 max-w-4xl mx-auto">{children}</main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
