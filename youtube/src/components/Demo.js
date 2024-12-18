import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [input, setinput] = useState("");
  const [theme, setheme] = useState(false);

  const find = useMemo(()=> findNthPrime(input),[input]);
  return (
    <div
      className={
        "border border-black h-[300px] w-[300px] " +
        (theme ? "bg-gray-700 text-white" : "")
      }
    >
      <input
        onChange={(e) => setinput(e.target.value)}
        type="number"
        value={input}
        className="border border-black"
      ></input>
      <button
        onClick={() => {
          setheme(!theme);
        }}
        className="border border-black bg-blue-300 p-2 ml-2 "
      >
        Theme
      </button>
      <h1>{find}</h1>
    </div>
  );
};

export default Demo;
