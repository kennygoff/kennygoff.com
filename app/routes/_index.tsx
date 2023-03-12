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
              {/* <a
                className="text-sm font-semibold mt-4 inline-block hover:text-sky-400 text-white hover:underline"
                href="https://kennygoff.notion.site/5e-DM-Screen-Template-94918eaae3024973831d3eae4d7810b1"
              >
                Get this template &rarr;
              </a> */}
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
              {/* <span className="inline-block rounded-sm font-bold uppercase text-xs py-0.5 px-2 bg-slate-700 text-white mt-4">
                Coming soon
              </span> */}
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
              {/* <a
                href="https://inwave.itch.io/double-turn"
                className="py-2 px-4 rounded"
                style={{ backgroundColor: "#ff2449" }}
              >
                Buy on itch.io
              </a> */}
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
              {/* <a
                className="text-sm font-semibold mt-4 inline-block hover:text-sky-400 text-white hover:underline"
                href="https://inwavelabs.com/double-turn"
              >
                Learn more &rarr;
              </a> */}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-row justify-between border-t border-slate-600 py-4 mt-16 text-sm">
        <div>Kenny Goff © 2023</div>
        <div>
          Made with <span style={{ fontFamily: "none" }}>❤</span> by{" "}
          <a
            href="https://kennygoff.com"
            className="text-white underline font-semibold"
          >
            Kenny Goff
          </a>
        </div>
      </footer>
    </div>
  );
}
