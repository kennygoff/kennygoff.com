import { Link } from "@remix-run/react";

export const Header = () => (
  <header className="max-w-6xl mx-auto px-4 sm:px-6 py-2 sm:py-4 flex flex-row gap-2 items-center">
    <Link to="/">
      <span className="font-semibold text-lg">Kenny Goff</span>
    </Link>
  </header>
);
