import React, { useEffect, useState } from "react";
import { api, google_api } from "../utils/constants";
import Videocard from "./Videocard";
import { Link } from "react-router-dom";

const VideoConatiner = () => {
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    getvideos();
  }, []);

  const getvideos = async () => {
    const data = await fetch(api + google_api);
    const json = await data.json();
    console.log(json.items);
    setvideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <Videocard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoConatiner;
