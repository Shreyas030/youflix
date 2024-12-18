import React from "react";

const LiveComments = ({ name, comment }) => {
  return (
    <>
      <div className="flex gap-3 p-2 shadow-sm">
        <div>
          <img
            className="h-8"
            src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
            alt="user"
          ></img>
        </div>
        <span className="font-bold">{name}</span>
        <span>{comment}</span>
      </div>
    </>
  );
};

export default LiveComments;
