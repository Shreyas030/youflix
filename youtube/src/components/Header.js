import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleMenu } from "../utils/appslice";
import { searchapi } from "../utils/constants";
import { cache } from "../utils/searchSlice";

function Header() {
  const [search, setsearch] = useState("");
  const [suggestions, setsuggestions] = useState([]);
  const [showsuggestions, setshowsuggestions] = useState(false);

  const searchcache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchcache[search]) {
        setsuggestions(searchcache[search]);
      } else {
        suggestionapi();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [search]);

  const tooglehandler = () => {
    dispatch(toogleMenu());
  };

  const suggestionapi = async () => {
    const api = await fetch(searchapi + search);
    const data = await api.json();
    setsuggestions(data[1]);
    console.log(data[1]);

    dispatch(
      cache({
        [search]: data[1],
      })
    );
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex gap-3 col-span-1">
        <img
          onClick={() => tooglehandler()}
          className="h-8"
          src="https://w7.pngwing.com/pngs/1000/160/png-transparent-hamburger-button-menu-computer-icons-wonderful-music-angle-text-rectangle.png"
          alt="menu"
        />
        <a href="/">
          <img
            className="h-8"
            src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"
            alt="logo"
          />
        </a>
      </div>
      <div className=" col-span-10 h-8 mb-4 ">
        <div>
          <input
            placeholder="Search"
            type="text"
            className="w-1/2 border border-gray-400 p-2 rounded-l-3xl pl-5"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            onFocus={() => setshowsuggestions(true)}
            onBlur={() => setshowsuggestions(false)}
          />
          <button className="border border-gray-400 p-2 rounded-r-3xl bg-gray-200 hover:bg-gray-300">
            Search
          </button>
        </div>

        {showsuggestions && (
          <div className="absolute bg-white py-2 px-2 w-[550px] rounded-md ">
            <ul>
              {suggestions.map((val) => (
                <li key={val} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {val}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="absolute top-2 ml-[630px] mt-2 bg-gray-100 rounded-lg p-1">
          <img
            src="https://www.iconpacks.net/icons/1/free-microphone-icon-342-thumb.png"
            className="h-8 rounded-lg"
            alt="icons"
          />
        </div>
      </div>

      <div className="col-span-1 ">
        <img
          className="h-8"
          src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
          alt="user"
        ></img>
      </div>
    </div>
  );
}

export default Header;
