import { Link, Outlet } from "react-router";
import { Footer } from "~/components/footer";

export default function Posts() {
  return (
    <div className="">
      <header className="max-w-6xl mx-auto px-4 sm:px-6 py-2 sm:py-4 flex flex-row gap-2 items-center">
        <Link to="/" className="text-white hover:text-sky-400">
          ✌️{" "}
          <span className="text-lg font-black font-vollkorn">Kenny Goff</span>
        </Link>
      </header>
      <main className="max-w-6xl mx-auto px-4 sm:px-6">
        <article className="prose prose-invert sm:prose-lg md:prose-xl prose-a:text-sky-400 prose-a:hover:text-sky-600 prose-h1:font-serif prose-headings:font-serif prose-h1:font-black prose-li:marker:text-white prose-h1:mt-12 prose-h1:mb-12 prose-h1:text-center mx-auto">
          <Outlet />
        </article>
      </main>
      <Footer />
    </div>
  );
}
