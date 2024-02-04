import React from "react";
import Omkar from "../assets/omkar.webp";
import { Link } from "react-scroll";

function Home() {
  return (
    <>
      <div name="Home" className=" pt-44 md:pt-44  w-full px-5 md:px-0">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4  md:flex-row transition-all duration-1000">
          <div className="flex flex-col justify-center ">
            <div className="text-4xl sm:text-6xl font-bold  ">
              Hi,
              <h1 className="text-transparent  bg-clip-text bg-gradient-to-r from-white npm to-pink-100 text-indigo-700 dark:text-white">
                I'm Omkar Gurav
              </h1>
              <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                Frontend Developer
              </h2>
            </div>
            <h3 className="text-gray-400 leading-relaxed mt-5">
              {" "}
              I am a passionate self-taught developer who loves to attend
              hackathons, events and build random things mostly.
            </h3>

            <div>
              <button className="mt-10 inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-white shadow-xl hover:bg-white/50  text-base font-bold px-5 py-2.5 justify-center text-black">
                <Link smooth duration={500} to="Contact">
                  Let's Connect
                </Link>
              </button>
            </div>
          </div>

          <div>
            <img
              width="100%"
              height="auto"
              draggable="false"
              src={Omkar}
              alt="omkar"
              loading="lazy"
              className="mt-12 md:mt-0  w-1/2 rounded-full mx-auto md:w-2/3 lg:w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
