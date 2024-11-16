import { Link } from "@remix-run/react";

export const Header = () => (
  <header className="max-w-6xl mx-auto p-4 flex flex-row gap-2 items-center">
    <Link to="/">
      <span className="font-semibold text-lg">Kenny Goff</span>
    </Link>
  </header>
);
