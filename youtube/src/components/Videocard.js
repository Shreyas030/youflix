import React from "react";

const Videocard = ({ info }) => {
  const { snippet, statistics } = info;

  const { title, channelTitle, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-[310px] shadow-lg">
      <img className="rounded-lg" src={thumbnails.medium.url} />
      <h1 className="font-bold ">{title}</h1>
      <ul>
        <li className="py-2 font-bold">{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default Videocard;
