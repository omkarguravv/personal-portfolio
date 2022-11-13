import React from 'react'


import carwash from "../assets/Projects/car-wash.jpg";
import followersUnfollowers from "../assets/Projects/followers-unfollowers.jpg";
import reactWeather from "../assets/Projects/reactWeather.jpg";
import simpleClock from "../assets/Projects/simple-clock.jpg";
import virtualAssistant from "../assets/Projects/virtual-assistant.jpg";

import { BsGithub } from 'react-icons/bs'
import { BiLinkExternal } from 'react-icons/bi'


function Projects() {
  const projects = [
    {
      id: 6,
      src: "/images/eCommerce .jpg",
      name: "Ecommerce Website",
      liveLink: "https://wowcake.vercel.app/",
      live: (
        <>
          <BiLinkExternal color='white' size={30} />
        </>
      ),
      repoLink: "https://github.com/omkarguravv/Cake-Shop-Website",
      github: (
        <>
          <BsGithub color='white' size={30} />
        </>
      ),

    },
    {
      id: 1,
      src: followersUnfollowers,
      name: "Github-Followers Unfollowers",
      liveLink: "https://github-followers-unfollowers.netlify.app/",
      live: (
        <>
          <BiLinkExternal color='white' size={30} />
        </>
      ),
      repoLink: "https://github.com/omkarguravv/github-follower-unfollower",
      github: (
        <>
          <BsGithub color='white' size={30} />
        </>
      ),

    },
    {
      id: 2,
      src: carwash,
      name: "Car Wash",
      liveLink: "https://quiet-harbor-51613.herokuapp.com/",
      live: (
        <>
          <BiLinkExternal color='white' size={30} />
        </>
      ),
      repoLink: "https://github.com/omkarguravv/Car-Wash",
      github: (
        <>
          <BsGithub color='white' size={30} />
        </>
      ),

    },
    {
      id: 3,
      src: reactWeather,
      name: "Weather App",
      liveLink: "https://weather-app-omkarguravv.netlify.app/",
      live: (
        <>
          <BiLinkExternal color='white' size={30} />
        </>
      ),
      repoLink: "https://github.com/omkarguravv/Weather-App",
      github: (
        <>
          <BsGithub color='white' size={30} />
        </>
      ),

    },
    {
      id: 4,
      src: virtualAssistant,
      name: "Virtual Assistant",
      liveLink: false,
      // live: (
      //   <>
      //     <BiLinkExternal color='white' size={30} />
      //   </>
      // ),
      repoLink: "https://github.com/omkarguravv/Virtual-Voice-Assistant",
      github: (
        <>
          <BsGithub color='white' size={30} />
        </>
      ),

    },
    {
      id: 5,
      src: simpleClock,
      name: "Simple Clock",
      liveLink: "https://omkarguravv.github.io/Simple-Clock/",
      live: (
        <>
          <BiLinkExternal color='white' size={30} />
        </>
      ),
      repoLink: "https://github.com/omkarguravv/Simple-Clock",
      github: (
        <>
          <BsGithub color='white' size={30} />
        </>
      ),

    },

  ]
  return (
    <>
      <div
        name="Portfolio"
        className='pt-48 bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'
      >
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-pink-600'>
              Portfolio
            </p>
            <p className='py-6'>Check out some of my work:</p>
          </div>

          <div className='md:px-6 grid sm:grid-cols-2 md:grid-cols-3  px-12  sm:px-0 gap-8   '>
            {projects.map(({ id, src, name, github, repoLink ,live, liveLink }) => (
              <div key={id} className='shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105 '>
                <img src={src} alt="" className='rounded-md ' />

                <p className='text-center font-medium  mt-4 '>{name}</p>

                <div className='flex - items-center justify-center'>

                  <a target="_blank" rel="noopener noreferrer" href={liveLink}> <button className='w-1/2 px-6 m-4 duration-200 hover:scale-105 '>{live}</button></a>
                  <a target="_blank" rel="noopener noreferrer" href={repoLink}> <button className='w-1/2 px-6 m-4 duration-200 hover:scale-105 '>{github}</button></a>
    
                </div>
              </div>
            ))}


          </div>

        </div>
      </div>
    </>
  )
}

export default Projects
