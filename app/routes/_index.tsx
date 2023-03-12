import { Footer } from "~/components/footer";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Index() {
  return (
    <div className="max-w-6xl m-auto p-4 md:py-0">
      <header></header>
      <main>
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
        <section>
          <h2 className="mb-4 font-semibold text-white text-xl">My projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <img
                src="/images/project-5edmscreen.png"
                alt="Screenshot of 5e DM Screen template"
                className="rounded-xl mb-6"
              />
              <h3 className="font-bold text-white my-2 text-lg">
                5e DM Screen for Notion
              </h3>
              <p className="my-2">
                A DM Screen and 5e quick reference in a Notion template. Quickly
                look up 5e rules, player stats, in this digial DM screen that is
                easy to extend and modify.
              </p>
              <a
                className="text-sm font-semibold mt-4 sm:inline-block text-white hover:bg-sky-600 active:bg-sky-600 py-2 px-3 bg-sky-500 rounded block text-center"
                href="https://kennygoff.notion.site/5e-DM-Screen-Template-94918eaae3024973831d3eae4d7810b1"
              >
                Get 5e DM Screen &rarr;
              </a>
            </div>
            <div>
              <img
                src="/images/project-5ecampaignwiki.png"
                alt="Screenshot of 5e Campaign Wiki template"
                className="rounded-xl mb-6"
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
              <span className="text-sm font-semibold mt-4 sm:inline-block text-white py-2 px-3 bg-slate-700 rounded block text-center">
                Coming soon
              </span>
            </div>
            <div>
              <img
                src="/images/dt-preview.png"
                alt="Screenshot of pixel art wrestling game, Double Turn"
                className="rounded-xl mb-6"
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
                <a
                  className="text-sm font-semibold sm:inline-block text-white hover:bg-sky-600 active:bg-sky-600 py-2 px-3 bg-sky-500 rounded block text-center"
                  href="https://store.steampowered.com/app/762680/Double_Turn/"
                >
                  Buy on Steam &rarr;
                </a>
                <a
                  className="text-sm font-semibold sm:inline-block text-white hover:bg-slate-600 active:bg-slate-600 py-2 px-3 bg-slate-500 rounded block text-center"
                  href="https://inwavelabs.com/double-turn"
                >
                  Learn more &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="p-6 bg-slate-700 rounded-xl my-12 flex flex-col sm:flex-row sm:items-center gap-4 sm:max-w-lg sm:mx-auto">
            <img
              src="/images/kg.jpg"
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
      <Footer />
    </div>
  );
}
