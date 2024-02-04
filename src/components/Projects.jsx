import React from "react";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import useAnalyticsEventTracker from "./useAnalyticsEventTracker";

function Projects() {
  const projects = [
    {
      id: 10,
      src: "/images/project/shareDeck.webp",
      name: "Share-Deck",
      liveLink: "https://share-deck.onrender.com/",
      live: (
        <>
          <BiLinkExternal size={30} />
        </>
      ),
      repoLink: "https://github.com/omkarguravv/Share-Deck",
      github: (
        <>
          <BsGithub size={30} />
        </>
      ),
    },
    {
      id: 6,
      src: "/images/project/eCommerce .webp",
      name: "Ecommerce Website",
      liveLink: "https://wowcake.vercel.app/",
      live: (
        <>
          <BiLinkExternal size={30} />
        </>
      ),
      repoLink: "https://github.com/omkarguravv/Cake-Shop-Website",
      github: (
        <>
          <BsGithub size={30} />
        </>
      ),
    },
    {
      id: 1,
      src: "/images/project/followers-unfollowers.webp",
      name: "Github-Followers Unfollowers",
      liveLink: "https://github-followers-unfollowers.netlify.app/",
      live: (
        <>
          <BiLinkExternal size={30} />
        </>
      ),
      repoLink: "https://github.com/omkarguravv/github-follower-unfollower",
      github: (
        <>
          <BsGithub size={30} />
        </>
      ),
    },
    {
      id: 2,
      src: "/images/project/car-wash.webp",
      name: "Car Wash",
      liveLink: "https://quiet-harbor-51613.herokuapp.com/",
      live: (
        <>
          <BiLinkExternal size={30} />
        </>
      ),
      repoLink: "https://github.com/omkarguravv/Car-Wash",
      github: (
        <>
          <BsGithub size={30} />
        </>
      ),
    },
    {
      id: 3,
      src: "/images/project/reactWeather.webp",
      name: "Weather App",
      liveLink: "https://weather-app-omkarguravv.netlify.app/",
      live: (
        <>
          <BiLinkExternal size={30} />
        </>
      ),
      repoLink: "https://github.com/omkarguravv/Weather-App",
      github: (
        <>
          <BsGithub size={30} />
        </>
      ),
    },
    {
      id: 4,
      src: "/images/project/virtual-assistant.webp",
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
          <BsGithub size={30} />
        </>
      ),
    },
    {
      id: 5,
      src: "/images/project/simple-clock.webp",
      name: "Simple Clock",
      liveLink: "https://omkarguravv.github.io/Simple-Clock/",
      live: (
        <>
          <BiLinkExternal size={30} />
        </>
      ),
      repoLink: "https://github.com/omkarguravv/Simple-Clock",
      github: (
        <>
          <BsGithub size={30} />
        </>
      ),
    },
  ];
  const gaEventTracker = useAnalyticsEventTracker("social-icons");

  return (
    <>
      <div
        name="Portfolio"
        className="pt-24 md:pt-28 px-5
        

  transition-all duration-1000"
      >
        <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <h2 className="text-4xl font-bold inline border-b-4 ">Portfolio</h2>
            <p className="py-6 text-gray-400">Check out some of my work:</p>
          </div>

          <div className="md:px-6 grid sm:grid-cols-1 md:grid-cols-3  px-12  sm:px-0 gap-8   ">
            {projects.map(
              ({ id, src, name, github, repoLink, live, liveLink }) => (
                <div
                  key={id}
                  className="duration-200 hover:scale-105 
              bg-[#242427]  flex-1 ring-1 ring-inset ring-gray-700/30 p-8 rounded-2xl  backdrop-blur-md
              "
                >
                  <img
                    width="100%"
                    height="50%"
                    draggable="false"
                    src={src}
                    alt="project"
                    className=" p-2 rounded-xl h-1/2  overflow-hidden"
                  />

                  <div className="h-1/2">
                    <h3 className="text-center font-bold  mt-2 text-black dark:text-white ">
                      {name}
                    </h3>

                    <div className="flex - items-center justify-center ">
                      <a
                        aria-label={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={liveLink ? liveLink : ""}
                      >
                        <button
                          aria-label={liveLink ? "Live" : "no Link"}
                          onClick={() => gaEventTracker(name + " live-link")}
                          className="w-1/2 px-6 m-4 duration-200 hover:scale-105 text-black dark:text-white "
                        >
                          {liveLink ? "Live" : ""}
                          {live}
                        </button>
                      </a>

                      <a
                        aria-label={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={repoLink}
                      >
                        <button
                          aria-label={github}
                          onClick={() => gaEventTracker(name + " Github-link")}
                          className="w-1/2 px-6 m-4 duration-200 hover:scale-105 text-black dark:text-white "
                        >
                          Github{github}
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
