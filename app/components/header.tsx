import { Link } from "react-router";

export const Header = () => (
  <header className="max-w-6xl mx-auto px-4 sm:px-6 py-2 sm:py-4 flex flex-row gap-2 items-center">
    <Link to="/" className="text-white hover:text-sky-400">
      ✌️ <span className="text-lg font-black font-vollkorn">Kenny Goff</span>
    </Link>
  </header>
);
