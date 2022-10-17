import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link'
import EmilioHere from "../images/emilio-smaller.jpg"


type Props = {}

function Hero({}: Props) {
const [text, count] = useTypewriter({
    words: [ "software developer.", "musician.", "video producer.", "composer."],
    loop: true,
    delaySpeed: 2000
    
})

  return (

    <div className="h-screen flex flex-col items-center justify-center text-center overflow-hidden">
            
    <BackgroundCircles />
          
          <div className="relative rounded-[50px] h-[300px] w-[200px] mx-auto overflow-hidden">
            <Image src={EmilioHere} alt="picture of emilio" layout='fill' objectFit='contain' className="" />
          </div>        

          <div className="z-20">
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[3px]">Music | Web Development | Video Production</h2>
            
            <h1 className="text-5xl lg:text-6xl font-semibold  px-10">
              I am a <span className="mr-1">{text}</span>
              <Cursor cursorColor='#9A21C6'/>
           </h1>
        
          <div className="pt-5">
            
            <Link href="#experience">
            <button className="heroButton">Experience</button>
            </Link>
            
            <Link href="#about">
            <button className="heroButton">About</button>            
            </Link>
            
            <Link href="#skills">
            <button className="heroButton">Skills</button>            
            </Link>

            <Link href="#projects">
            <button className="heroButton">Projects </button>          
            </Link>
          
          </div>
        
          </div>   

          
    </div>

    
  )
}

export default Hero