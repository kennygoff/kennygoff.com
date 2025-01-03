import { Link } from "react-router";
import { twMerge } from "tailwind-merge";

const headers = [
  { letter: "B", category: "TTRPGs" },
  { letter: "I", category: "Music" },
  { letter: "N", category: "Leisure" },
  { letter: "G", category: "Activities" },
  { letter: "O", category: "Development" },
];

const bingo = [
  [
    {
      id: "shadowdark",
      description: "Run a Shadowdark session",
      emoji: "🗡️",
      completed: false,
    },
    {
      id: "kids-on-bikes",
      description: "Run a Kids on Bikes session",
      emoji: "🚲",
      completed: false,
    },
    {
      id: "publish-adventure",
      description: "Self-publish an adventure",
      emoji: "📝",
      completed: false,
    },
    {
      id: "irl-session",
      description: "Run an in-person session",
      emoji: "📖",
      completed: false,
    },
    {
      id: "release-tool",
      description: "Release a TTRPG tool",
      emoji: "🚀",
      completed: false,
    },
  ],
  [
    {
      id: "show",
      description: "Go to a touring band's show",
      emoji: "🎸",
      completed: false,
    },
    {
      id: "local-show",
      description: "Go to a local band's show",
      emoji: "🎤",
      completed: false,
    },
    {
      id: "vinyl",
      description: "Buy a vinyl album",
      emoji: "🔊",
      completed: false,
    },
    {
      id: "drums",
      description: "Learn a song on drums",
      emoji: "🥁",
      completed: false,
    },
    {
      id: "explore-genre",
      description: "Go to a show outside my typical genres",
      emoji: "🎶",
      completed: false,
    },
  ],
  [
    {
      id: "movies",
      description: "Go to the movies",
      emoji: "🍿",
      completed: false,
    },
    { id: "park-day", description: "Park day", emoji: "🌳", completed: false },
    {
      id: "free-space",
      description: "Take a long weekend off",
      emoji: "🌴",
      completed: false,
    },
    {
      id: "montreal",
      description: "Go to Montreal",
      emoji: "🇨🇦",
      completed: false,
    },
    {
      id: "seattle",
      description: "Go to Seattle",
      emoji: "⛰️",
      completed: false,
    },
  ],
  [
    { id: "tennis", description: "Play tennis", emoji: "🎾", completed: false },
    {
      id: "new-activity",
      description: "Try a new activity",
      emoji: "🎲",
      completed: false,
    },
    { id: "darts", description: "Throw darts", emoji: "🎯", completed: false },
    { id: "pool", description: "Play pool", emoji: "🎱", completed: false },
    { id: "bowling", description: "Go bowling", emoji: "🎳", completed: false },
  ],
  [
    {
      id: "godot",
      description: "Make a game with Godot",
      emoji: "👾",
      completed: false,
    },
    {
      id: "swift",
      description: "Make an iOS app with Swift",
      emoji: "📱",
      completed: false,
    },
    {
      id: "tauri",
      description: "Make a desktop app with Tauri",
      emoji: "🖥️",
      completed: false,
    },
    {
      id: "deno",
      description: "Make something with Deno",
      emoji: "🦕",
      completed: false,
    },
    {
      id: "drizzle",
      description: "Make something with Drizzle",
      emoji: "🌧️",
      completed: false,
    },
  ],
];

export default function Bingo2025() {
  const percentagePassed = (
    ((new Date().getTime() - new Date("2025-01-01").getTime()) /
      (new Date("2026-01-01").getTime() - new Date("2025-01-01").getTime())) *
    100
  ).toFixed(2);
  const completed = bingo.flat().filter(({ completed }) => completed).length;
  const bingos = 0;

  return (
    <main className="h-screen grid grid-cols-1 grid-rows-[0fr_0fr_1fr_0fr] bg-slate-800">
      <div className="grid grid-cols-[0fr_1fr_0fr] px-3">
        <div className="content-center">
          <Link
            to="/"
            className="text-2xl hover:bg-slate-950 focus:bg-slate-950 p-2 rounded-lg block text-center"
          >
            ✌️
          </Link>
        </div>
        <div className="p-4 text-center">
          <h1 className="text-2xl font-black">2025 Bingo!</h1>
          <p className="text-lg italic font-semibold">
            My personal bingo board for 2025
          </p>
        </div>
        <div className="content-center">
          <Link
            to="https://bsky.app/profile/kennygoff.com"
            className="text-2xl hover:bg-slate-950 focus:bg-slate-950 p-2 rounded-lg block text-center"
          >
            🦋
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-5">
        {headers.map((header) => (
          <div className="bg-cyan-500 text-center content-center text-black font-black text-xl py-2">
            {header.letter}
            <div className="text-sm font-semibold text-cyan-900">
              ({header.category})
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-5 grid-rows-5 grid-flow-col gap-0.5">
        {bingo.map((column) =>
          column.map((cell) => (
            <div
              className={twMerge(
                "text-center content-center bg-slate-300 text-black p-2",
                cell.completed && "bg-green-400",
              )}
            >
              <div className="text-3xl">{cell.emoji}</div>
              <div
                className={twMerge(
                  "text-sm sm:text-base",
                  cell.completed && "line-through",
                )}
              >
                {cell.description}
              </div>
            </div>
          )),
        )}
      </div>
      <div className="p-4 text-center relative">
        <div className="z-20 font-semibold">{`Today is ${new Intl.DateTimeFormat(
          "en-US",
          {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          },
        ).format(new Date())}`}</div>
        <div className="z-20">{`${percentagePassed}% of 2025 has passed, I have completed ${completed}/25 squares and have ${bingos} BINGOs`}</div>
        <div
          className={`absolute bg-emerald-500 top-0 left-0 bottom-0 z-0`}
          style={{ width: `${percentagePassed}%` }}
        />
      </div>
    </main>
  );
}
