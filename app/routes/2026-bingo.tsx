import { useEffect, useState } from "react";
import { Link } from "react-router";
import { twMerge } from "tailwind-merge";

const headers = [
  { letter: "B", category: "TTRPGs" },
  { letter: "I", category: "Events" },
  { letter: "N", category: "Leisure" },
  { letter: "G", category: "Learning" },
  { letter: "O", category: "Development" },
];

const bingo = [
  [
    {
      id: "b-3",
      description: "Publish a printed adventure zine",
      emoji: "📔",
      completed: false,
    },
    {
      id: "b-1",
      description: "Run a 4-6 session PbtA campaign",
      emoji: "📖",
      completed: false,
    },
    {
      id: "b-5",
      description: "Release a new tool",
      emoji: "🚀",
      completed: false,
    },
    {
      id: "b-2",
      description: "GM a paid game",
      emoji: "💰",
      completed: false,
    },
    {
      id: "b-4",
      description: "Publish a TTRPG",
      emoji: "📒",
      completed: false,
    },
  ],
  [
    {
      id: "i-1",
      description: "Go to a movie",
      emoji: "🍿",
      completed: false,
    },
    {
      id: "i-2",
      description: "Go to a comedy show",
      emoji: "🎭",
      completed: false,
    },
    {
      id: "i-4",
      description: "Go to a concert",
      emoji: "🎸",
      completed: false,
    },
    {
      id: "i-5",
      description: "Go to a wrestling match",
      emoji: "🤼",
      completed: false,
    },
    {
      id: "i-3",
      description: "Go to a game night",
      emoji: "🎲",
      completed: false,
    },
  ],
  [
    {
      id: "n-4",
      description: "Play and finish a video game",
      emoji: "🎮",
      completed: false,
    },
    { id: "n-5", description: "Go to Montreal", emoji: "🇨🇦", completed: false },
    {
      id: "n-1",
      description: "Long weekend off",
      emoji: "🌴",
      completed: false,
    },
    {
      id: "n-3",
      description: "Read a fiction book",
      emoji: "📚",
      completed: false,
    },
    {
      id: "n-2",
      description: "Park day",
      emoji: "🌳",
      completed: false,
    },
  ],
  [
    {
      id: "g-5",
      description: "Learn a song on drums",
      emoji: "🥁",
      completed: false,
    },
    {
      id: "g-3",
      description: "Drawing book/course",
      emoji: "🎨",
      completed: false,
    },
    {
      id: "g-2",
      description: "Web Animations course",
      emoji: "💫",
      completed: false,
    },
    {
      id: "g-4",
      description: "Writing course",
      emoji: "✍️",
      completed: false,
    },
    {
      id: "g-1",
      description: "Design course",
      emoji: "🧑‍🎨",
      completed: false,
    },
  ],
  [
    {
      id: "o-2",
      description: "Make site with Ghost",
      emoji: "👻",
      completed: false,
    },
    {
      id: "o-4",
      description: "Make an app with Swift",
      emoji: "📱",
      completed: false,
    },
    {
      id: "o-3",
      description: "Make an app with Tauri",
      emoji: "🖥️",
      completed: false,
    },
    {
      id: "o-1",
      description: "Publish an open source tool",
      emoji: "🧑‍💻",
      completed: false,
    },
    {
      id: "o-5",
      description: "Make a game with Godot",
      emoji: "👾",
      completed: false,
    },
  ],
];

export default function Bingo2026() {
  const [percentagePassed, setPercentagePassed] = useState<string>(
    (
      ((new Date().getTime() - new Date("2026-01-01").getTime()) /
        (new Date("2027-01-01").getTime() - new Date("2026-01-01").getTime())) *
      100
    ).toFixed(2),
  );
  const completed = bingo.flat().filter(({ completed }) => completed).length;
  const bingos = 2;

  useEffect(() => {
    setPercentagePassed(
      (
        ((new Date().getTime() - new Date("2026-01-01").getTime()) /
          (new Date("2027-01-01").getTime() -
            new Date("2026-01-01").getTime())) *
        100
      ).toFixed(2),
    );
  });

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
          <h1 className="text-2xl font-black">2026 Bingo!</h1>
          <p className="text-lg italic font-semibold">
            My personal bingo board for 2026
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
          <div
            className="bg-cyan-500 text-center content-center text-black font-black text-xl py-2"
            key={header.letter}
          >
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
              key={cell.id}
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
      <div
        className="p-4 text-center"
        style={{
          backgroundImage: `linear-gradient(90deg,var(--color-emerald-500) 0%,var(--color-emerald-500) ${percentagePassed}%,transparent ${percentagePassed}%,transparent 100%)`,
        }}
      >
        <div className="font-semibold">{`Today is ${new Intl.DateTimeFormat(
          "en-US",
          {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "America/New_York",
          },
        ).format(new Date())}`}</div>
        <div>{`${percentagePassed}% of 2026 has passed, I have completed ${completed}/25 squares and have ${bingos} BINGOs`}</div>
      </div>
    </main>
  );
}
