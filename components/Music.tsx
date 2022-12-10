import React from "react";
import { Music as MusicType } from "../typings";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";
// import ReactPlayer from "react-player";
import dynamic from "next/dynamic";

// not the ideal way to do it for now, but this is a workaround for the hydration error Next throws when trying to use React Player out of the box.
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

type Props = {
  music: MusicType[];
};

function Music({ music }: Props) {
  return (
    <div
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row 
    max-w-full justify-evenly mx-auto items-center z-0 "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Music
      </h3>

      <h2 className="absolute top-32 text-xs uppercase text-gray-500 pb-2 pt-5 tracking-[3px] text-center">
        Mix, Mastering, Production, and Performance
      </h2>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
         scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin"
      >
        {music.map((item) => {
          const videoUrl = item.linkToListen;
          return (
            <div
              key={item._id}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-1 items-center justify-center 
            pt-36 p-4 md:p-44 h-screen "
            >
              <ReactPlayer url={item.linkToListen} height="50%" width="100%" />
              <h4 className="text-lg md:text-4xl font-semibold text-center ">
                {item.title}
              </h4>
              <p className="">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Music;
