import {
  ChangeEvent,
  InputHTMLAttributes,
  KeyboardEvent,
  useState,
} from "react";
import { evaluate } from "mathjs";
import { twMerge } from "tailwind-merge";
import { clamp } from "../utils";

// https://stackoverflow.com/questions/2630418/javascript-regex-returning-true-then-false-then-true-etc
const inputNumbersOnlyRegex = /^\d+$/;
const inputFilterRegex = /^[dadvdis\d\:\(|\)|\/|\*|\+|\-\ ]+$/;
const inputInverseRegex = /[^dadvdis\d\:\(|\)|\/|\*|\+|\-\ ]/g;
const inputRegex = /^(?:(\dd\d+(?::(?:adv|dis))?)|\d|[\(|\)|\/|\*|\+|\-\ ])+$/;
const diceNotationRegex = /(?:(\dd\d+(?::(?:adv|dis))?))/;

const safeEval = (expr: string): number | null => {
  try {
    return evaluate(expr);
  } catch {
    return null;
  }
};

type Props = InputHTMLAttributes<HTMLInputElement> & {
  showResult?: boolean;
  value?: number;
  range?: [number | undefined, number | undefined];
  onChangeValue?: (value: number) => void;
};

export const DiceInput = ({
  showResult,
  value,
  range,
  onChangeValue,
}: Props) => {
  const [text, setText] = useState(`${value ?? ""}`);
  const [valid, setValid] = useState(true);
  const [lowerBound, upperBound] = range ?? [undefined, undefined];

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    let rawText = e.target.value;

    // Remove incorrect characters
    if (!inputFilterRegex.test(rawText)) {
      rawText = rawText.replaceAll(inputInverseRegex, "");
    }

    // Test for valid input
    const isValid = inputRegex.test(rawText);
    setValid(isValid && safeEval(rawText) !== null);

    // Finally, set the text of the controlled input
    setText(rawText);
  };

  const onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const evaled = safeEval(text);
      const newValue = evaled !== null ? Math.floor(evaled) : null;
      if (newValue !== null) {
        const clamped = clamp(newValue, lowerBound, upperBound);
        onChangeValue?.(clamped);
        setText(`${clamped}`);
      }
    }
  };

  const onBlur = () => {
    const evaled = safeEval(text);
    const newValue = evaled !== null ? Math.floor(evaled) : null;
    if (newValue !== null) {
      const clamped = clamp(newValue, lowerBound, upperBound);
      onChangeValue?.(clamped);
      setText(`${clamped}`);
    }
  };

  const isNumber = inputNumbersOnlyRegex.test(text);
  const isEmpty = text.length === 0;
  const isExactValue = text === `${value}`;
  const shouldShowResult =
    showResult && !isNumber && !(isEmpty || isExactValue) && valid;
  const result = shouldShowResult ? safeEval(text) : "";

  return (
    <div className="relative">
      <input
        type="text"
        className={twMerge(
          "px-2 py-1 rounded text-white bg-slate-900 border border-slate-600 outline-none focus:border-slate-300 w-10 text-center font-bold",
          !(isEmpty || isExactValue)
            ? valid
              ? "border-emerald-500 focus:border-emerald-500"
              : "border-red-500 focus:border-red-500"
            : "",
        )}
        value={text}
        onKeyUp={onKeyUp}
        onBlur={onBlur}
        onChange={onChange}
      />
      {showResult && !isNumber && !(isEmpty || isExactValue) && valid ? (
        <div className="absolute right-0 top-0 bottom-0 flex flex-row items-center pr-2 text-slate-400 font-bold">
          = {result}
        </div>
      ) : null}
    </div>
  );
};
