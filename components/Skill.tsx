import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Skill as SkillType } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: SkillType;
  directionLeft?: boolean;
};

function Skill({ skill, directionLeft }: Props) {
  return (
    // need to get the Image component working correctly once I have Sanity CMS links to know if this is correct
    <motion.div
      initial={{
        x: directionLeft ? -100 : 100,
        opacity: 0,
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="group relative flex cursor-pointer "
    >
      <div
        className="rounded-full border-grey-500 object-cover w-16 h-16 md:h-20 md:w-20 xl:w-28 xl:h-28 
        filter group-hover:grayscale transition duration-300 ease-in-out "
      >
        <div className="flex justify-center p-1 items-center">
          <Image
            src={urlFor(skill?.image).url()}
            alt="logo"
            className=""
            height="60vh"
            width="60vw"
          />
        </div>
      </div>

      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
     group-hover:bg-white h-20 w-20 md:h-20 md:w-20 xl:h-20 xl:w-20 rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-xs md:text-md font-bold text-black opacity-100">
            {skill?.title}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Skill;
