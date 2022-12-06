import React from 'react'



import { BsGithub } from 'react-icons/bs'
import { BiLinkExternal } from 'react-icons/bi'
import useAnalyticsEventTracker from './useAnalyticsEventTracker';



function Projects() {
  const projects = [
    {
      id: 6,
      src: "/images/project/eCommerce .jpg",
      name: "Ecommerce Website",
      liveLink: "https://wowcake.vercel.app/",
      live: (
        <>
          <BiLinkExternal  size={30} />
        </>
      ),
      repoLink: "https://github.com/omkarguravv/Cake-Shop-Website",
      github: (
        <>
          <BsGithub  size={30} />
        </>
      ),

    },
    {
      id: 1,
      src: "/images/project/followers-unfollowers.jpg",
      name: "Github-Followers Unfollowers",
      liveLink: "https://github-followers-unfollowers.netlify.app/",
      live: (
        <>
          <BiLinkExternal  size={30} />
        </>
      ),
      repoLink: "https://github.com/omkarguravv/github-follower-unfollower",
      github: (
        <>
          <BsGithub  size={30} />
        </>
      ),

    },
    {
      id: 2,
      src: "/images/project/car-wash.jpg",
      name: "Car Wash",
      liveLink: "https://quiet-harbor-51613.herokuapp.com/",
      live: (
        <>
          <BiLinkExternal  size={30} />
        </>
      ),
      repoLink: "https://github.com/omkarguravv/Car-Wash",
      github: (
        <>
          <BsGithub  size={30} />
        </>
      ),

    },
    {
      id: 3,
      src: "/images/project/reactWeather.jpg",
      name: "Weather App",
      liveLink: "https://weather-app-omkarguravv.netlify.app/",
      live: (
        <>
          <BiLinkExternal  size={30} />
        </>
      ),
      repoLink: "https://github.com/omkarguravv/Weather-App",
      github: (
        <>
          <BsGithub  size={30} />
        </>
      ),

    },
    {
      id: 4,
      src: "/images/project/virtual-assistant.jpg",
      name: "Virtual Assistant",
      liveLink: false,
      // live: (
      //   <>
      //     <BiLinkExternal  size={30} />
      //   </>
      // ),
      repoLink: "https://github.com/omkarguravv/Virtual-Voice-Assistant",
      github: (
        <>
          <BsGithub  size={30} />
        </>
      ),

    },
    {
      id: 5,
      src: "/images/project/simple-clock.jpg",
      name: "Simple Clock",
      liveLink: "https://omkarguravv.github.io/Simple-Clock/",
      live: (
        <>
          <BiLinkExternal  size={30} />
        </>
      ),
      repoLink: "https://github.com/omkarguravv/Simple-Clock",
      github: (
        <>
          <BsGithub  size={30} />
        </>
      ),

    },

  ]
  const gaEventTracker = useAnalyticsEventTracker('social-icons');

  return (
    <>
      <div
        name="Portfolio"
        className='pt-48 
         bg-gradient-to-r from-rose-100 to-teal-100
         dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-900 dark:to-black

  transition-all duration-1000'
      >
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

          <div className='pb-8'>
            <h2 className='text-4xl font-bold inline border-b-4 border-indigo-500 dark:border-gray-500  text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'>
              Portfolio
            </h2>
            <p className='py-6 text-black dark:text-white'>Check out some of my work:</p>
          </div>

          <div className='md:px-6 grid sm:grid-cols-2 md:grid-cols-3  px-12  sm:px-0 gap-8   '>
            {projects.map(({ id, src, name, github, repoLink, live, liveLink }) => (
              <div key={id} className='shadow-md shadow-gray-400 rounded-lg duration-200 hover:scale-105 bg-indigo-100 dark:bg-transparent '>
                <img  loading="lazy"  draggable="false" src={src} alt="" className='rounded-md ' />

                <h3 className='text-center font-medium  mt-4 text-black dark:text-white '>{name}</h3>

                <div className='flex - items-center justify-center '>

                  <a target="_blank" rel="noopener noreferrer" href={liveLink}>
                    <button
                      onClick={() => gaEventTracker(name + " live-link")}
                      className='w-1/2 px-6 m-4 duration-200 hover:scale-105 text-black dark:text-white '>
                      {live}</button></a>

                  <a target="_blank" rel="noopener noreferrer" href={repoLink}>
                    <button
                      onClick={() => gaEventTracker(name + " Github-link")}
                      className='w-1/2 px-6 m-4 duration-200 hover:scale-105 text-black dark:text-white '>{github}</button></a>

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
