import { Link } from "react-router";
import type { MetaFunction } from "react-router";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

import { LinkButton } from "~/components/link-button";
import { Footer } from "~/components/footer";
import { BlueskyIcon } from "~/components/icons/bluesky";
import { GitHubIcon } from "~/components/icons/github";

export const meta: MetaFunction = () => [
  { title: "Kenny Goff - Creative developer and TTRPG game master" },
  {
    name: "description",
    content:
      "Kenny Goff is a creative developer. He's a web developer, game developer, and TTRPG game master.",
  },
  {
    property: "og:image",
    content: "https://kennygoff.com/images/social.png",
  },
];

export default function Index() {
  return (
    <div className="md:py-0">
      <header className="max-w-6xl m-auto px-4 sm:px-6 py-2 sm:py-4">
        <Link to="/" className="text-white hover:text-sky-400">
          <span className="font-semibold text-lg">Kenny Goff</span>
        </Link>
      </header>
      <main className="max-w-6xl m-auto px-4 sm:px-6">
        <section className="text py-12 sm:py-12 md:py-12">
          <h1 className="mb-4 text-4xl font-bold">
            Hey! My name is{" "}
            <span className="text-nowrap">
              <span className="text-white font-black border-b-4 border-sky-500 relative">
                Kenny
              </span>{" "}
              ✌️
            </span>
          </h1>
          <h1 className="mb-3 text-xl sm:text-2xl font-semibold">
            I'm a creative developer in Brooklyn
          </h1>
          <p className="mb-2 max-w-md">
            I'm a software developer and TTRPG game master. I love building
            tools and games.
          </p>
          <p className="flex flex-row gap-3">
            <a
              className="text-sm font-semibold gap-1.5 hover:text-sky-400 inline-flex group"
              href="https://bsky.app/profile/kennygoff.com"
            >
              <BlueskyIcon />
              <span>Bluesky</span>
            </a>
            <a
              className="text-sm font-semibold gap-1.5 hover:text-sky-400 inline-flex group"
              href="https://github.com/kennygoff"
            >
              <GitHubIcon />
              <span>GitHub</span>
            </a>
          </p>
        </section>
        <section className="mb-12 mt-6">
          <h2 className="mb-4 font-semibold text-white text-xl">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <img
                src="/images/project-encounter-clash.png"
                alt="Screenshot of 5e Campaign Wiki template"
                className="rounded-xl mb-6 aspect-video"
                width="640"
                height="360"
              />
              <h3 className="font-bold text-white my-2 text-lg">
                Encounter Clash
              </h3>
              <p className="my-2">
                A combat encounter tracker for 5e. Setup your encounters and
                track initiative, HP, and monsters quickly.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row mt-4">
                <LinkButton href="https://sidequest.tools/encounter-clash">
                  Visit Encounter Clash &rarr;
                </LinkButton>
              </div>
            </div>
            <div>
              <img
                src="/images/project-dice-roller.png"
                alt="Screenshot of 5e Campaign Wiki template"
                className="rounded-xl mb-6 aspect-video"
                width="640"
                height="360"
              />
              <h3 className="font-bold text-white my-2 text-lg">Dice Roller</h3>
              <p className="my-2">A simple dice roller for TTRPGs</p>
              <div className="flex flex-col gap-2 sm:flex-row mt-4">
                <LinkButton href="https://sidequest.tools/dice-roller">
                  Visit Dice Roller &rarr;
                </LinkButton>
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
                A pro-wrestling fighting game. Out now on{" "}
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
                  className="text-sm font-bold sm:inline-block text-slate-100 hover:bg-slate-600 active:bg-slate-600 py-2 px-3 bg-slate-500 rounded-sm block text-center"
                  href="https://doubleturngame.com"
                >
                  Learn more &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 font-semibold text-white text-xl">
            TTRPG Writing
          </h2>
          <p className="mb-2">
            Here's some of the adventures I've written for TTRPGs!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 grid-rows-[masonry]">
            <div className="border border-slate-600 rounded-lg overflow-hidden">
              <h3 className="px-3 py-1 bg-slate-600 font-semibold text-white text-sm">
                D&D Adventures
              </h3>
              <ul className="px-3 py-2 [&>li]:py-1 list-disc ml-4">
                <li>
                  <Link
                    to="https://www.dmsguild.com/en/product/544474/baldur-s-gate-the-vault-of-marvels"
                    className="underline font-semibold"
                  >
                    Baldur's Gate: The Vault of Marvels
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://sidequesters.club/adventures/trouble-in-waterlily"
                    className="underline font-semibold"
                  >
                    Trouble in Waterlily
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://site.dmsguild.com/product/539739/The-Firework-Goblins"
                    className="underline font-semibold"
                  >
                    The Firework Goblins
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="mb-4 font-semibold text-white text-xl">Articles</h2>
          <p className="mb-2">
            Here's a collection of articles I've written, spanning a few
            different topics.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 grid-rows-[masonry]">
            <div className="border border-slate-600 rounded-lg overflow-hidden">
              <h3 className="px-3 py-1 bg-slate-600 font-semibold text-white text-sm">
                Running D&D and TTRPGs
              </h3>
              <ul className="px-3 py-2 [&>li]:py-1 list-disc ml-4">
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
                    to="/using-notion-dm-screen"
                    className="underline font-semibold"
                  >
                    Using Notion as a DM Screen
                  </Link>
                </li>
                <li>
                  <Link
                    to="/digital-dice-vs-physical-dice"
                    className="underline font-semibold"
                  >
                    Digital dice vs physical dice
                  </Link>{" "}
                  {/* <span className="rounded-sm ml-1 text-xs bg-emerald-600 text-white uppercase px-1.5 py-0.5 font-bold">
                    New
                  </span> */}
                </li>
              </ul>
            </div>
            <div className="border border-slate-600 rounded-lg overflow-hidden">
              <h3 className="px-3 py-1 bg-slate-600 font-semibold text-white text-sm">
                Miscellaneous
              </h3>
              <ul className="px-3 py-2 [&>li]:py-1 list-disc ml-4">
                <li>
                  <Link to="/2025-bingo" className="underline font-semibold">
                    2025 Bingo
                  </Link>
                </li>
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
                <li>
                  <Link
                    to="/breaking-board-game-conventions"
                    className="underline font-semibold"
                  >
                    Breaking board game conventions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div className="p-6 bg-slate-700 rounded-xl my-12 flex flex-col sm:flex-row sm:items-center gap-4 sm:max-w-lg sm:mx-auto">
            <img
              src="/images/kgo.jpg"
              alt="Photograph of Kenny Goff"
              className="rounded-full w-20 h-20"
            />
            <div>
              <h2 className="font-bold mb-1">Find me on the internet</h2>
              <p>
                If you'd like to get in touch you can shoot me an email or
                connect with me on Bluesky
              </p>
              <div className="flex flex-col mt-4 gap-1">
                <a
                  className="text-sm font-semibold gap-1 hover:text-sky-400 text-white hover:underline inline-flex"
                  href="mailto:hi@kennygoff.com"
                >
                  <EnvelopeIcon className="h-5 w-5" />
                  <span>hi@kennygoff.com</span>
                </a>
                <a
                  className="text-sm font-semibold gap-1 hover:text-sky-400 text-white hover:underline inline-flex group"
                  href="https://bsky.app/profile/kennygoff.com"
                >
                  <BlueskyIcon />
                  <span>@kennygoff.com</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <Newsletter /> */}
      <Footer />
    </div>
  );
}
