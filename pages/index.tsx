import type { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Music from "../components/Music";
import Video from "../components/Video";

import { ScriptProps } from "next/script";
import {
  PageInfo,
  Experience,
  Skill,
  Project,
  Social,
  Music as MusicType,
  Video as VideoType,
} from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";

import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocial } from "../utils/fetchSocials";
import { fetchMusic } from "../utils/fetchMusic";
import { fetchVideo } from "../utils/fetchVideo";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  music: MusicType[];
  video: VideoType[];
};

const Home = ({
  pageInfo,
  experiences,
  skills,
  projects,
  socials,
  music,
  video,
}: Props) => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y 
    snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin"
    >
      <Head>
        <title>Emilio Guarino</title>
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="music" className="snap-start">
        <Music music={music} />
      </section>

      <section id="video" className="snap-start">
        <Video video={video} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;

// this calls the utils functions, which call the api endpoints, which get data from sanity
export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();
  const music: MusicType[] = await fetchMusic();
  const video: VideoType[] = await fetchVideo();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
      music,
      video,
    },
    revalidate: 1,
  };
};
