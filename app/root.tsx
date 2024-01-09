import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";
import Fathom from "~/components/fathom";

export const meta: MetaFunction = () => [
  {
    charset: "utf-8",
  },
  { title: "Kenny Goff" },
  { name: "viewport", content: "width=device-width,initial-scale=1" },
];

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="en" className="bg-slate-900 text-slate-200">
      <head>
        <Meta />
        <Links />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Fathom />
      </body>
    </html>
  );
}
