import { Link } from "@remix-run/react";

export const Header = () => (
  <header className="max-w-6xl mx-auto p-4 flex flex-row gap-2 items-center">
    <Link to="/">
      <img src="/images/logo-square.svg" className="w-8 h-8" alt="Home" />
    </Link>
    <Link to="/">
      <img src="/images/logotype.svg" className="h-6 mt-1" alt="Home" />
    </Link>
  </header>
);
