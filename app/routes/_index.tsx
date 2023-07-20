import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

import { Newsletter } from "~/components/newsletter";
import { LinkButton } from "~/components/link-button";
import { Footer } from "~/components/footer";

export const meta: MetaFunction = () => {
  return {
    title: "Kenny Goff | Designer, developer, and TTRPG game master",
    description:
      "Kenny Goff is a designer and developer. He's a web engineer, TTRPG game master, and runs an indie game and product development studio.",
  };
};

export default function Index() {
  return (
    <div className="md:py-0">
      <header className="max-w-6xl m-auto p-4 md:py-4">
        <Link to="/">
          <img src="/images/logo-square.svg" className="w-8 h-8" alt="Home" />
        </Link>
      </header>
      <main className="max-w-6xl m-auto p-4">
        <section className="text my-16 sm:my-16 md:my-24 max-w-md">
          <p className="mb-3">Hey! 👋</p>
          <h1 className="mb-3">
            I'm <span className="text-white font-semibold">Kenny Goff</span>, a
            designer and developer.
          </h1>
          <p className="mb-3">
            I enjoy building tools to save time and designing games to spend it.
            I'm a senior web engineer, a TTRPG game master, and a dive bar dart
            player. I run an indie game and product development studio,{" "}
            <a
              href="https://inwavelabs.com"
              className="text-white font-semibold underline"
            >
              Inwave Labs
            </a>
            .
          </p>
        </section>
        <section className="mb-12">
          <h2 className="mb-4 font-semibold text-white text-xl">My projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <img
                src="/images/project-5ecampaignwiki.png"
                alt="Screenshot of 5e Campaign Wiki template"
                className="rounded-xl mb-6 aspect-video"
                width="640"
                height="360"
              />
              <h3 className="font-bold text-white my-2 text-lg">
                5e Campaign Wiki for Notion
              </h3>
              <p className="my-2">
                A Notion template to help you run your 5e campaign. Set up with
                ready-to-use databases for players, NPCs, session notes,
                encounters and more. Plan and run your games with ease all
                within Notion.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row mt-4">
                <LinkButton href="https://kennygoff.notion.site/5e-Campaign-Wiki-2234b289a06d47c6967a99a934864c6a">
                  Get 5e Campaign Wiki &rarr;
                </LinkButton>
                <Link
                  className="text-sm font-bold sm:inline-block text-slate-100 hover:bg-slate-600 active:bg-slate-600 py-2 px-3 bg-slate-500 rounded block text-center"
                  to="/5e-campaign-wiki-notion-template"
                >
                  Learn more &rarr;
                </Link>
              </div>
            </div>
            <div>
              <img
                src="/images/project-5edmscreen.png"
                alt="Screenshot of 5e DM Screen template"
                className="rounded-xl mb-6 aspect-video"
                width="640"
                height="360"
              />
              <h3 className="font-bold text-white my-2 text-lg">
                5e DM Screen for Notion
              </h3>
              <p className="my-2">
                A DM Screen and 5e quick reference in a Notion template. Quickly
                look up 5e rules, player stats, and more in this digital DM
                screen that is easy to extend and modify.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row mt-4">
                <LinkButton href="https://kennygoff.notion.site/5e-DM-Screen-Template-94918eaae3024973831d3eae4d7810b1">
                  Get 5e DM Screen &rarr;
                </LinkButton>
                <Link
                  className="text-sm font-bold sm:inline-block text-slate-100 hover:bg-slate-600 active:bg-slate-600 py-2 px-3 bg-slate-500 rounded block text-center"
                  to="/5e-dm-screen-notion-template"
                >
                  Learn more &rarr;
                </Link>
              </div>
            </div>
            <div>
              <img
                src="/images/dt-preview.png"
                alt="Screenshot of pixel art wrestling game, Double Turn"
                className="rounded-xl mb-6 aspect-video"
                width="640"
                height="360"
              />
              <h3 className="font-bold text-white my-2 text-lg">Double Turn</h3>
              <p className="my-2">
                A pro-wrestling fighting game. I designed and programmed Double
                Turn with the help of an artist and sound design team. It's out
                now on{" "}
                <a href="https://store.steampowered.com/app/762680/Double_Turn/">
                  Steam
                </a>{" "}
                and <a href="https://inwave.itch.io/double-turn">itch.io</a>.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row mt-4">
                <LinkButton href="https://store.steampowered.com/app/762680/Double_Turn/">
                  Buy on Steam &rarr;
                </LinkButton>
                <a
                  className="text-sm font-bold sm:inline-block text-slate-100 hover:bg-slate-600 active:bg-slate-600 py-2 px-3 bg-slate-500 rounded block text-center"
                  href="https://doubleturngame.com"
                >
                  Learn more &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="mb-4 font-semibold text-white text-xl">Articles</h2>
          <p className="mb-2">
            Here's a collection of articles I've written, spanning a few
            different topics. I treat this much more like a{" "}
            <a
              href="https://joelhooks.com/digital-garden"
              className="underline"
            >
              digital garden
            </a>{" "}
            than a chronological blog, so I'll keep this section updated over
            time with my favorite posts, musings, ideas, and advice. It's an
            ever evolving project as is the rest of this site.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 [grid-template-rows:masonry]">
            <div className="border border-slate-600 rounded-lg overflow-hidden">
              <h3 className="px-3 py-1 bg-slate-600 font-semibold text-white text-sm">
                Running D&D and TTRPGs
              </h3>
              <ul className="px-3 py-2 [&>li]:py-1 list-disc ml-4">
                <li>
                  <Link
                    to="/digital-dice-vs-physical-dice"
                    className="underline font-semibold"
                  >
                    Digital dice vs physical dice
                  </Link>{" "}
                  {/* <span className="rounded ml-1 text-xs bg-emerald-600 text-white uppercase px-1.5 py-0.5 font-bold">
                    New
                  </span> */}
                </li>
                <li>
                  <Link
                    to="/notion-features-for-running-dnd"
                    className="underline font-semibold"
                  >
                    Helpful Notion features for running D&D
                  </Link>
                </li>
                <li>
                  <Link
                    to="/owlbear-rodeo-the-painless-virtual-tabletop"
                    className="underline font-semibold"
                  >
                    Owlbear Rodeo: The painless virtual tabletop
                  </Link>
                </li>
                <li>
                  <Link
                    to="/beyond-wave-echo-cave"
                    className="underline font-semibold"
                  >
                    Beyond Wave Echo Cave: Expanding Lost Mines of Phandelver
                  </Link>
                </li>
                <li>
                  <Link
                    to="/using-notion-dm-screen"
                    className="underline font-semibold"
                  >
                    Using Notion as a DM Screen
                  </Link>
                </li>
              </ul>
            </div>
            <div className="border border-slate-600 rounded-lg overflow-hidden">
              <h3 className="px-3 py-1 bg-slate-600 font-semibold text-white text-sm">
                Miscellaneous
              </h3>
              <ul className="px-3 py-2 [&>li]:py-1 list-disc ml-4">
                <li>
                  <Link
                    to="/posts/a-new-freelancers-guide-to-freelancing"
                    className="underline font-semibold"
                  >
                    A new freelancer's guide to freelancing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/posts/inwave-labs-4-years"
                    className="underline font-semibold"
                  >
                    Freelance, burnout, and Double Turn: 4 Years of Inwave Labs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/posts/dark-mode-and-stripe-mode"
                    className="underline font-semibold"
                  >
                    Dark mode and Stripe mode
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div className="p-6 bg-slate-700 rounded-xl my-12 flex flex-col sm:flex-row sm:items-center gap-4 sm:max-w-lg sm:mx-auto">
            <img
              src="/images/kg-160.jpg"
              alt="Photograph of Kenny Goff"
              className="rounded-full w-20 h-20"
            />
            <div>
              <h2 className="font-bold mb-1">Want to chat?</h2>
              <p>If you'd like to get in touch, shoot me an email!</p>
              <a
                className="text-sm font-semibold mt-4 gap-1 hover:text-sky-400 text-white hover:underline inline-flex"
                href="mailto:hi@kennygoff.com"
              >
                <EnvelopeIcon className="h-5 w-5" />
                <span>hi@kennygoff.com</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      {/* <Newsletter /> */}
      <Footer />
    </div>
  );
}
