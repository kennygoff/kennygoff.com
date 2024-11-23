import type { LinksFunction, MetaFunction } from "react-router";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import stylesheet from "~/tailwind.css?url";
import Fathom from "~/components/fathom";

export const meta: MetaFunction = () => [
  { title: "Kenny Goff" },
  {
    property: "og:image",
    content: "https://kennygoff.com/images/social.png",
  },
];

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="en" className="bg-slate-900 text-slate-200">
      <head>
        {/* Swapped the order of meta and link tags https://github.com/remix-run/remix/issues/9242#issuecomment-2466234861 */}
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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <Fathom fathomId="HMQYESLQ" domain="kennygoff.com" includeWildcard />
      </body>
    </html>
  );
}
