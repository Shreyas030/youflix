import React, { useRef, useState } from "react";

const Demo2 = () => {
  let x = 0;
  const [state, setstate] = useState(0);
  const ref = useRef(0);
  return (
    <>
      <div className="flex flex-col gap-10 border border-black h-[300px] w-[300px] ml-10">
        <div className="flex">
          <button
            className="border border-black p-2 m-2 w-20"
            onClick={() => {
              x = x + 1;
              console.log(x);
            }}
          >
            Let
          </button>
          <h1 className="pt-2 ml-5 font-bold text-3xl">:{x}</h1>
        </div>
        <div className="flex">
          {console.log("rendering...")}
          <button
            className="border border-black p-2 m-2 w-20"
            onClick={() => {
              setstate(state + 1);
            }}
          >
            state
          </button>
          <h1 className="pt-2 ml-5 font-bold text-3xl">:{state}</h1>
        </div>
        <div className="flex">
          <button
            className="border border-black p-2 m-2 w-20"
            onClick={() => {
              ref.current = ref.current + 1;
              console.log(ref);
            }}
          >
            ref
          </button>
          <h1 className="pt-2 ml-5 font-bold text-3xl">:{ref.current}</h1>
        </div>
      </div>
    </>
  );
};

export default Demo2;
