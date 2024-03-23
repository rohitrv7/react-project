import React from "react";
import "./main.css";

export default function Main() {
  return (
    <div className="main w-full p-4 h-screen relative">
      <div className="navbar">
        <div className="sealink flex justify-between">
          <div className="link">
            <ul className="flex gap-5 text-white">
              <li><a href="">Home</a></li>
              <li><a href="">Podcast</a></li>
              <li><a href="">Live</a></li>
            </ul>
          </div>
          <div className="sea relative flex align-middle">
            <box-icon name='search'></box-icon>
            <input type="text" name="" id="" placeholder="Type here to search" className="border-0 outline-none rounded-lg px-7 pt-1 pb-1 align-middle" />
          </div>
        </div>
      </div>

      <div className="artist absolute bottom-[36.3%] left-3 border rounded-xl h-[25%] w-[70%]"></div>
      <div className="gentop relative flex">
        {/* <div className="gen absolute h-52 w-full border bottom-2"></div> */}
        {/* <div className="top border"></div> */}
      </div>
      <div className="music-player absolute bottom-2 right-3 border rounded-xl h-[60%] w-[300px]"></div>
    </div>
  );
}
