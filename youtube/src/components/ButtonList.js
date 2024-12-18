import React from "react";
import Button from "./Button";
function ButtonList() {
  const arr = [
    "All",
    "Music",
    "Gaming",
    "Movies",
    "The Godfather",
    "Podcast",
    "Sports",
    "Cricket",
    "Virat Kohli",
    "Bollywood",
    "Programming",
  ];

  return (
    <div>
      {arr.map((val, idx) => {
        return <Button key={idx} label={val} />;
      })}
    

    </div>
  );
}

export default ButtonList;
