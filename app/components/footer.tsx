import { Link } from "react-router";

export const Footer = () => (
  <footer className="max-w-6xl mx-auto flex flex-col pt-4 pb-16 justify-between text-sm">
    <div className="text-center font-semibold my-1">
      Made with <span style={{ fontFamily: "none" }}>❤</span> by{" "}
      <Link to="/" className="text-white underline font-semibold">
        Kenny Goff
      </Link>
    </div>
    <div className="text-center text-slate-400">Kenny Goff © 2017-2025</div>
  </footer>
);
