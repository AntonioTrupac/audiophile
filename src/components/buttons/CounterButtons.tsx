import { Minus, Plus } from "../icons";
import React from "react";

interface CounterButtonsProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const CounterButtons = ({
  count,
  increment,
  decrement,
}: CounterButtonsProps) => {
  return (
    <div className="flex items-center justify-center bg-grayish p-4">
      <button
        onClick={decrement}
        aria-label="decrement"
        className="flex border-none bg-transparent px-0 py-0 text-black/25 hover:opacity-80 active:opacity-80"
      >
        <Minus />
      </button>

      <span className="min-w-5 mx-11 my-0 flex items-center justify-center text-[13px] font-semibold leading-[18px]">
        {count}
      </span>

      <button
        onClick={increment}
        aria-label="increment"
        className="flex border-none bg-transparent px-0 py-0 text-black/25 hover:opacity-80 active:opacity-80"
      >
        <Plus />
      </button>
    </div>
  );
};

export default CounterButtons;
