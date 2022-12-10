import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import EmilioTri from "../images/HotWobble-2.jpg";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";
// portfolio-2/images/HotWobble-2.jpg

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <div
      className="flex flex-col relative h-screen text-center md:text-left 
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className=" mt-40 pt-10  md:mb-0 md:mt-0 flex-shrink-0 lg:w-1/2 lg:h-1/2 md:w-2/3 md:h-2/3  object-cover xl:w-[500px] xl:h-[500px]"
      >
        <Image
          src={urlFor(pageInfo?.heroImage).url()}
          alt="emilio with bass, synth, and keyboard"
          className="rounded-[40px]"
          height="500vh"
          width="500vw"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.3 }}
        className="space-y-5  px-0 md:p-5 md:mt-10 "
      >
        <h4 className="text-2xl md:text-4xl font-semibold ">
          My <span className="underline decoration-[#df73ff]">background.</span>
        </h4>
        <p className="pb-20 text-sm md:text-md">
          {pageInfo?.backgroundInformation}
        </p>
      </motion.div>
    </div>
  );
};

export default About;
