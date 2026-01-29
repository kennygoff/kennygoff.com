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
      <header className="max-w-6xl m-auto px-4 sm:px-6 py-4">
        <Link to="/" className="text-white hover:text-sky-400">
          ✌️{" "}
          <span className="text-lg font-black font-vollkorn">Kenny Goff</span>
        </Link>
      </header>
      <main className="max-w-6xl m-auto px-4 sm:px-6">
        <section className="text py-12 sm:py-12 md:py-12 flex flex-col md:flex-row gap-6">
          <div className="relative group">
            <div className="absolute aspect-square top-0 left-0 -z-10 rounded-lg w-32 h-32 md:w-48 md:h-48 bg-sky-500 rotate-0 scale-100 group-hover:rotate-6 group-hover:scale-110 duration-200" />
            <img
              src="/images/kgo.jpg"
              alt="Photograph of Kenny Goff"
              className="rounded-lg w-32 h-32 md:w-48 md:h-48 z-10 scale-100 group-hover:scale-105 duration-200 shadow block"
            />
          </div>
          <div>
            <h1 className="mb-2 text-5xl font-bold">
              <span className="text-nowrap">
                <span className="text-white font-black relative">
                  Kenny Goff
                </span>
              </span>
            </h1>
            <h1 className="font-vollkorn mb-4 text-xl sm:text-2xl font-bold italic text-slate-200">
              creative developer & game designer
            </h1>
            <p className="mb-2 max-w-md">
              I'm a software developer, designer, and writer. I love building
              tools and making games.
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
          </div>
        </section>
        <section className="mb-12 mt-6">
          <h2 className="mb-4 font-bold text-white text-2xl font-vollkorn">
            Apps & Games
          </h2>
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
          <h2 className="mb-4 font-bold text-white text-2xl font-vollkorn">
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
                    to="https://sidequesters.club/adventures/rumble-at-the-hog-and-hound"
                    className="underline font-semibold"
                  >
                    Rumble at the Hog & Hound
                  </Link>
                  <span className="rounded-sm ml-1 text-xs bg-emerald-600 text-white uppercase px-1.5 py-0.5 font-bold">
                    New
                  </span>
                </li>
                <li>
                  <Link
                    to="https://www.dmsguild.com/product/544474/baldur-s-gate-the-vault-of-marvels"
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
          <h2 className="mb-4 font-bold text-white text-2xl font-vollkorn">
            Articles
          </h2>
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
                    to="/building-my-new-vtt-token-maker"
                    className="underline font-semibold"
                  >
                    Building my new VTT Token Maker
                  </Link>
                  <span className="rounded-sm ml-1 text-xs bg-emerald-600 text-white uppercase px-1.5 py-0.5 font-bold">
                    New
                  </span>
                </li>
                <li>
                  <Link
                    to="/my-process-for-drawing-dungeons"
                    className="underline font-semibold"
                  >
                    My Process for Drawing Dungeons
                  </Link>
                </li>
                <li>
                  <Link
                    to="/2025-ttrpg-reflections"
                    className="underline font-semibold"
                  >
                    2025 TTRPG Reflections
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
                </li>
              </ul>
            </div>
            <div className="border border-slate-600 rounded-lg overflow-hidden">
              <h3 className="px-3 py-1 bg-slate-600 font-semibold text-white text-sm">
                Miscellaneous
              </h3>
              <ul className="px-3 py-2 [&>li]:py-1 list-disc ml-4">
                <li>
                  <Link to="/2026-bingo" className="underline font-semibold">
                    2026 Bingo
                  </Link>
                </li>
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

        <section className="mb-12">
          <h2 className="mb-4 font-bold text-white text-2xl font-vollkorn">
            About me
          </h2>
          <p className="mb-6">
            Hello there! My name is Kenny Goff and I'm based in Brooklyn. I
            enjoy building useful tools with a high level of quality and
            usability as well as playful games and experiences.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="border-l-4 border-sky-400 p-3 pl-4 rounded bg-slate-800">
              <h3 className="font-bold italic text-xl font-vollkorn mb-1">
                Multi-disciplinary developer
              </h3>
              <p className="mb-2">
                I've been a professional software engineer for over 10 years. I
                like wearing multiple hats and doing both the design and
                development work of products and sites. I run an independent
                software company and freelance at{" "}
                <Link to="https://inwavelabs.com" className="underline">
                  Inwave Labs
                </Link>
                .
              </p>
              <div className="flex flex-col gap-2 sm:flex-row mt-4">
                <LinkButton href="https://tally.so/r/Bz4Z7Q">
                  Hire me &rarr;
                </LinkButton>
              </div>
            </div>
            <div className="border-l-4 border-sky-400 p-3 pl-4 rounded bg-slate-800">
              <h3 className="font-bold italic text-xl font-vollkorn mb-1">
                TTRPG designer & writer
              </h3>
              <p className="mb-2">
                I write adventures and self-publish under my indie press{" "}
                <Link to="https://sidequesters.club" className="underline">
                  Sidequesters Club
                </Link>
                . I like to give game masters the foundation for crafting an
                entertaining story with their players, simple to read and adapt
                to any table.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row mt-4">
                <LinkButton href="https://sidequesters.club">
                  View adventures &rarr;
                </LinkButton>
              </div>
            </div>
            <div className="border-l-4 border-sky-400 p-3 pl-4 rounded bg-slate-800">
              <h3 className="font-bold italic text-xl font-vollkorn mb-1">
                Experienced Game Master
              </h3>
              <p className="mb-2">
                I'm a game master for games like <em>Dungeons & Dragons</em>,{" "}
                <em>Shadowdark</em>, and <em>Blades in the Dark</em>. I have 4
                years of experience running games from one-shots to long-running
                2+ year campaigns.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row mt-4">
                <LinkButton href="https://startplaying.games/gm/kennygoff">
                  StartPlaying profile &rarr;
                </LinkButton>
              </div>
            </div>
            {/* <div className="border-l-4 border-sky-400 p-3 pl-4 rounded bg-slate-800">
              <h3 className="font-bold italic text-xl font-vollkorn mb-1">
                Quality craftwork
              </h3>
              <p className="mb-2">
                All my work is made with pride and craft. I aim for a high level
                of quality, usability, and polish. I don't use generative AI in
                the process or development of any of my projects.
              </p>
            </div> */}
          </div>
        </section>
        <section>
          <div className="p-6 bg-slate-700 rounded-xl my-12 flex flex-col sm:flex-row sm:items-center gap-4 sm:max-w-lg sm:mx-auto">
            <div>
              <h2 className="font-bold mb-1">Contact</h2>
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
