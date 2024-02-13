import { Link, Outlet } from "@remix-run/react";
import { Footer } from "~/components/footer";

export default function Articles() {
  return (
    <div className="">
      <header className="max-w-6xl mx-auto p-4 flex flex-row gap-2 items-center">
        <Link to="/">
          <img src="/images/logo-square.svg" className="w-8 h-8" alt="Home" />
        </Link>
        <Link to="/">
          <img src="/images/logotype.svg" className="h-6 mt-1" alt="Home" />
        </Link>
      </header>
      <main className="max-w-6xl mx-auto p-4">
        <article className="prose prose-invert sm:prose-lg md:prose-xl prose-a:text-sky-400 hover:prose-a:text-sky-600 prose-h1:font-serif prose-headings:font-serif prose-h1:font-black prose-li:marker:text-white prose-h1:mt-12 prose-h1:mb-12 prose-h1:text-center mx-auto">
          <Outlet />
          {/* <NewsletterBox /> */}
        </article>
      </main>
      <Footer />
    </div>
  );
}
