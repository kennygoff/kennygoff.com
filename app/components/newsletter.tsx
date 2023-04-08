import { EnvelopeIcon } from "@heroicons/react/24/solid";

export const Newsletter = () => (
  <section className="bg-slate-700">
    <div className="max-w-6xl px-3 py-12 mt-2 mb-4 mx-auto">
      <div className="max-w-2xl">
        <h2 className="font-bold mb-5 text-2xl">
          A newsletter for people who love running TTRPGs
        </h2>
        <p className="text-lg mb-5">
          Want to learn more about DM tools or just geek out about new ways to
          enhance running D&D? Sign up for my newsletter! I talk weekly about
          tools, resources, tips and advice for running TTRPGs to make our time
          as DMs simpler so we can build the best campaigns for our players.
        </p>
        <form
          action="https://buttondown.email/api/emails/embed-subscribe/kennygoff"
          method="post"
          target="popupwindow"
        >
          <label
            htmlFor="email"
            className="font-semibold text-sm pt-1 pb-0.5 pl-2 flex gap-1 flex-row items-center"
          >
            <EnvelopeIcon className="w-4 h-4 inline" />
            <span>Email</span>
          </label>
          <input type="hidden" value="1" name="embed" />
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:max-w-md sm:items-center">
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="rounded px-3 py-1.5 text-slate-50 bg-slate-900 border-slate-600 border flex-grow text-base"
            />
            <input
              type="submit"
              value="Subscribe"
              className="text-white bg-sky-600 hover:bg-sky-700 rounded px-3 py-1.5 font-semibold text-base hover:shadow-sm hover:cursor-pointer self-start"
            />
          </div>
        </form>
      </div>
    </div>
  </section>
);
