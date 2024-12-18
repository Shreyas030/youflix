import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appslice";
import { useSearchParams } from "react-router-dom";
import { google_api, video_api } from "../utils/constants";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

function WatchPage() {
  const [details, setdata] = useState(null);
  const [searchParams] = useSearchParams();
  const [isCollapsed, setIsCollapsed] = useState(true);
  // console.log(searchParams.get("v"));
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  });

  useEffect(() => {
    getvideos();
  }, []);

  const getvideos = async () => {
    const data = await fetch(
      `${video_api}${searchParams.get("v")}&key=${google_api}`
    );
    const json = await data.json();
    setdata(json.items[0]);
    console.log(json.items[0]);

    // console.log(json.items[0].snippet.title)
  };

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex w-full">
          <div className="px-5 rounded-lg">
            <iframe
              width="1000"
              height="500"
              src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share ;"
            ></iframe>
            <div className="py-2 font-bold text-xl">
              <h1>{details?.snippet?.title}</h1>
            </div>
            <div className="flex gap-4 mt-4">
              <img
                className="h-8"
                src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
                alt="user"
              ></img>
              <h1 className="font-bold mt-1">
                {details?.snippet?.channelTitle}
              </h1>
              <button className="rounded-lg px-2 border border-black text-white bg-black">
                Subscribe
              </button>
              <div>
                <div className="flex">
                  <button>
                    <img
                      src="https://cdn.iconscout.com/icon/free/png-256/free-like-2190245-1853251.png"
                      className="h-8 ml-48 rounded-lg"
                      alt="icons"
                    />
                  </button>
                  <h1 className="ml-2 mt-1">
                    {/* {details.statistics.likeCount / 100}k */}
                  </h1>
                  <button>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeFxRkpfgQeKCPaLSAQ3DC1e0_0__l1qXVHW6Dk-6jf9gVZ5dIrKnzJgJzKx09iDQyw7A&usqp=CAU"
                      className="h-8 ml-6 rounded-lg"
                      alt="icons"
                    />
                  </button>
                  <div className="inline-flex ml-5 rounded-lg px-1">
                    <button>
                      <img
                        src="https://w7.pngwing.com/pngs/1021/919/png-transparent-arrow-signage-computer-icons-font-awesome-share-icon-symbol-share-miscellaneous-angle-logo-thumbnail.png"
                        className="h-8 rounded-lg"
                        alt="icons"
                      />
                    </button>
                    <h1>Share</h1>
                  </div>
                  <div className="flex ml-5">
                    <button>
                      <img
                        src="https://img.favpng.com/18/3/17/app-icon-download-icon-essential-icon-png-favpng-GAajYzjixCMbMVVFAsYnVHkFy.jpg"
                        className="h-7 rounded-lg"
                      />
                    </button>
                    <h1>Download</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 bg-gray-200 rounded-lg p-4 w-[1000px] cursor-pointer">
              <h1 className="font-bold">Description : </h1>
              <p onClick={toggleCollapse} className="cursor-pointer mt-2">
                {isCollapsed
                  ? details?.snippet?.localized.description.slice(0, 200) +
                    "..."
                  : details?.snippet?.localized.description}
              </p>
            </div>
          </div>
          <div className="w-full">
            <LiveChat />
          </div>
        </div>
        <div className="max-w-5xl">
          <CommentsContainer />
        </div>
      </div>
    </>
  );
}

export default WatchPage;
