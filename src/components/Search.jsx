import React from "react";
import MusicPlayer from "./MusicPlayer";

function Search() {
  return (
    <div
      className="search relative h-[65rem] px-[5rem] bg-[#081730] pt-[18rem] pb-[10rem]
    mt-[-15rem] z-[1] flex items-center justify-between rounded-b-[5rem]"
    >
      {/* left-side */}
      <div className="left flex-1 ">
        <img
          src={require("../img/backgraphics.png")}
          alt=""
          className="absolute top-[22rem] left-[-47rem]"
        />

        <img
          src={require("../img/d1.png")}
          alt=""
          className="w-[16rem] top-[26rem] absolute"
        />

        <img
          src={require("../img/d2.png")}
          alt=""
          className="w-[9rem] top-[32.7rem] absolute left-[7rem]"
        />

        <img
          src={require("../img/d3.png")}
          alt=""
          className="w-[9rem] top-[33rem] absolute left-[17rem]"
        />

        <img
          src={require("../img/d4.png")}
          alt=""
          className="w-[17rem] top-[50rem] absolute left-[2rem]"
        />
      </div>
      {/* right-side */}
      <div
        className="right flex items-start flex-col justify-start flex-1 h-[100%]
        pt-[9rem]"
      >
        {/* Search-bar */}
        <div className="searchbar flex justify-start w-[100%]">
          <input
            type="text"
            placeholder="Enter the keyword or URL"
            className="flex-[19] outline-none bg-[#020917] rounded-xl p-3 h-[3rem]"
          />
          {/* searchicon */}
          <div
            className="searchIcon flex flex1 items-center rounded-xl ml-4
                    bg-gradient-to-bl from-[#f3071d] to-[#E600FF] p-4 h-[3rem]"
          >
            <img
              src={require("../img/search.png")}
              alt=""
              className="w-[1.5rem] "
            />
          </div>
        </div>

        {/* tild-icon */}
        <div className="tild flex flex-col  justify-start mt-7 w-[100%]">
          <img
            src={require("../img/Path 318.png")}
            alt=""
            className="w-[5rem]"
          />
        </div>

        {/* paragraph */}
        <div className="detail flex flex-col mt-5 text-4xl">
          <span>Search Music by</span>
          <span>
            <b>Name or Direct URL</b>
          </span>
          <span className="text-sm mt-3 text-[#4d586a]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            voluptatem?
            <br />
            Lorem ipsum dolor sit amet consectetur.
            <br />
            Lorem, ipsum dolor.
          </span>
        </div>

        {/* music player */}
        <MusicPlayer />
      </div>
    </div>
  );
}

export default Search;
