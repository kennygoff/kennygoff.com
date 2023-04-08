import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { LinkButton } from "~/components/link-button";
import { Newsletter } from "~/components/newsletter";

export const meta: MetaFunction = () => {
  return {
    title: "5e DM Screen for Notion",
    description:
      "A DM Screen and 5e reference in a Notion template. Quickly look up rules, player stats, and more in this digital DM screen that is easy to extend and modify.",
  };
};

export default function Articles() {
  return (
    <div className="">
      <Header />
      <main className="max-w-6xl mx-auto p-4">
        <h1 className="mb-4 font-semibold text-white text-3xl">
          5e DM Screen for Notion
        </h1>
        <section className="flex flex-col gap-4 sm:flex-row-reverse sm:items-center">
          <img
            src="/images/5e-dm-screen-screenshot.png"
            alt="Screenshot of DM Screen in use"
            className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
          <div>
            <h2 className="text-2xl">
              The simplest reference tool your 5e games
            </h2>
            <p className="my-2">
              A DM Screen and 5e quick reference in a Notion template. Quickly
              look up 5e rules, player stats, and more in this digial DM screen
              that is easy to extend and modify.
            </p>
            <ul className="list-disc list-inside">
              <li>Quick reference for D&D 5e rules</li>
              <li>Easy to read at a glance</li>
              <li>Fully customizable</li>
            </ul>
            <p className="my-2">
              Duplicate this template into your Notion and customize it to fit
              your campaign. Need some ideas for how to use this? Check out{" "}
              <Link to="/using-notion-dm-screen" className="underline">
                my post
              </Link>{" "}
              on the topic.
            </p>
            <LinkButton href="https://kennygoff.notion.site/5e-DM-Screen-Template-94918eaae3024973831d3eae4d7810b1">
              Get 5e DM Screen, free &rarr;
            </LinkButton>
          </div>
        </section>
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
}
