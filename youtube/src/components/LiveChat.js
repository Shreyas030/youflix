import React, { useEffect } from "react";
import LiveComments from "./LiveComments";
import { useDispatch, useSelector } from "react-redux";
import { addmessage } from "../utils/chatslice";
import { generate, generateRandomMessage } from "../utils/helper";
import { useState } from "react";

const LiveChat = () => {
  const [live, setlive] = useState("");
  const dispatch = useDispatch();
  const chatmessage = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addmessage({
          name: generate(),
          message: generateRandomMessage(),
        })
      );
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full border border-black h-[500px] p-2 rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        {chatmessage.map((e, index) => (
          <LiveComments key={index} name={e.name} comment={e.message} />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addmessage({ name: "Aryan Sharma", message: live }));
          {
            setlive("");
          }
        }}
        className="w-full border border-black"
      >
        <input
          type="search"
          className="p-2 ml-2 outline-none w-96"
          onChange={(e) => setlive(e.target.value)}
        />

        <button className="p-1 bg-green-100 rounded-lg">Submit</button>
        {/* {setlive("")}; */}
      </form>
    </>
  );
};

export default LiveChat;
