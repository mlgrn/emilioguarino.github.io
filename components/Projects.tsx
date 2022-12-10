import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row 
    max-w-full justify-evenly mx-auto items-center space-y-3"
    >
      <h3 className="absolute top-24 uppercase text-gray-500 text-2xl ">
        Web Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
         scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin"
      >
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-1 items-center justify-center 
            p-10 md:p-44 h-screen "
          >
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-10"
            >
              <Image
                src={urlFor(project?.image).url()}
                alt="project image"
                objectFit="contain"
                height="400vh"
                width="600vw"
              />
            </motion.div>

            <div className="space-y-3 px-0 md:px-10 max-w-6xl ">
              <h4 className="text-lg md:text-2xl font-semibold text-center ">
                <span className="underline decoration-[#F7AB0A]/50">
                  {" "}
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>

              {/* technologies needs to be wrapped in an empty div to inherit spacing correctly */}
              <div className="flex place-content-center">
                {project?.technologies.map((tech) => (
                  <Image
                    key={tech._id}
                    src={urlFor(tech.image).url()}
                    alt="technology icon"
                    objectFit="contain"
                    height="50vh"
                    width="50vw"
                  />
                ))}
              </div>

              <p className="text-md md:text-lg text-center md:text-left">
                {project?.summary}
              </p>
              <h3 className="text-red-700 font-bold">
                <a href={project?.linkToBuild} rel="noreferrer" target="_blank">
                  Click here to see the {project.title} app
                </a>
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* the background decoration thing */}
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
