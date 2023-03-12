import { Link } from "@remix-run/react";

export const Footer = () => (
  <footer className="flex flex-row justify-between border-t border-slate-600 py-4 sm:mb-8 text-sm">
    <div>Kenny Goff © 2023</div>
    <div>
      Made with <span style={{ fontFamily: "none" }}>❤</span> by{" "}
      <Link to="/" className="text-white underline font-semibold">
        Kenny Goff
      </Link>
    </div>
  </footer>
);
