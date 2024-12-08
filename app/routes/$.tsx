import { Link } from "react-router";
import { Footer } from "~/components/footer";

export const loader = () => {
  return { status: 404 };
};

export default function PageNotFound() {
  return (
    <div className="max-w-6xl m-auto p-4 md:py-0">
      <main>
        <section className="text my-16 sm:my-16 md:my-24 max-w-md">
          <h1 className="mb-3">Whoops! 😬</h1>
          <p className="mb-3">
            Looks like you stumbled on a page that doesn't exist!
          </p>
          <Link
            className="text-sm font-semibold mt-4 inline-block hover:text-sky-400 text-white hover:underline"
            to="/"
          >
            Go back home &rarr;
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
