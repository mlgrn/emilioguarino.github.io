import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-0 
    flex-shrink-0 w-[500px] h-[650px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-95
    cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 xl:w-[200px] xl:h-[200px] object-cover object-center"
      >
        {/* main experience icon  */}
        <Image
          src={urlFor(experience?.companyImage).url()}
          alt="This is an experience image"
          className="rounded-lg"
          height="75vh"
          width="75vw"
          objectFit="contain"
        />
      </motion.div>

      <div className="px-0 md:px-10 ">
        {/* Job title */}
        <h4 className="flex flex-wraptext-xl font-light pl-20 md:text-2xl md:pl-0">
          {experience?.jobTitle}
        </h4>

        {/* company */}
        <p className="font-bold text-xl mt-1 pl-20 md:text-2xl md:pl-0">
          {experience?.company}
        </p>

        {/* tech icons */}
        <div className="flex flex-wrap my-2 pl-20 md:text-2xl md:pl-0">
          {experience.technologies.map((technology) => (
            <Image
              key={technology._id}
              src={urlFor(technology.image).url()}
              alt="technology icon"
              height="40px"
              width="40px"
            />
          ))}
        </div>
        {/* experience info  */}
        <div className="uppercase py-1 text-gray-300 pl-20 md:text-xl md:pl-0">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </div>

        {/* experience points  */}
        <ul className="list-disc space-y-4 ml-5 max-h-96 text-sm h-[30vh] pl-20 pr-20 md:text-lg md:pl-0 overflow-auto">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
