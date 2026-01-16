import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router";

export const NewsletterBox = () => (
  <section className="bg-slate-700 not-prose p-8 rounded-xl">
    <h2 className="font-bold mb-5 text-2xl">Join my GM newsletter!</h2>
    <p className="text-lg mb-2">
      A bi-weekly newsletter about tools, resources, and advice for making our
      time as game masters simpler so we can build the best campaigns for our
      players. I'll also send occasional updates highlighting new product
      releases.
    </p>
    <p className="text-sm mb-5">
      <Link
        to="https://buttondown.com/sidequestersclub/archive/"
        className="text-sky-500"
      >
        View the Archive
      </Link>{" "}
      &middot;{" "}
      <Link
        to="https://buttondown.com/sidequestersclub/rss"
        className="text-sky-500"
      >
        Subscribe via RSS
      </Link>
    </p>
    <form
      action="https://buttondown.email/api/emails/embed-subscribe/sidequestersclub"
      method="post"
      target="popupwindow"
      onSubmit={() =>
        window.open("https://buttondown.com/sidequestersclub", "popupwindow")
      }
    >
      <label
        htmlFor="email"
        className="font-semibold text-sm pt-1 pb-0.5 pl-1 flex gap-1 flex-row items-center"
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
          className="rounded-sm px-3 py-1.5 text-slate-50 bg-slate-900 border-slate-600 border grow text-base"
        />
        <input
          type="submit"
          value="Subscribe"
          className="bg-sky-600 hover:bg-sky-700 rounded-sm px-3 py-1.5 font-bold text-base hover:shadow-xs hover:cursor-pointer self-start"
        />
      </div>
    </form>
  </section>
);
