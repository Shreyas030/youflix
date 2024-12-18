import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Sidebar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-5 w-48 shadow-lg">
      <div>
        <Link to={"/"}>
          <ul>Home</ul>
        </Link>
        <ul>Shorts</ul>
        <ul>Video</ul>
        <ul>Live</ul>
      </div>

      <div className="pt-5">
        <h1 className="font-bold">You</h1>
        <ul>Your Channel</ul>
        <ul>History</ul>
        <ul>Your Videos</ul>
        <ul>Watch Later</ul>
        <ul>Liked Videos</ul>
      </div>
      <div className="pt-5">
        <h1 className="font-bold ">Subscriptions</h1>
        <ul>Music</ul>
        <ul>Sports</ul>
        <ul>Gaming</ul>
        <ul>Music</ul>
      </div>
      <div className="pt-5">
        <h1 className="font-bold">Watch Later</h1>
        <ul>Music</ul>
        <ul>Sports</ul>
        <ul>Gaming</ul>
        <ul>Music</ul>
      </div>
    </div>
  );
}

export default Sidebar;
