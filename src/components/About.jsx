import React from "react";

function About() {
  return (
    <>
      <div
        name="About"
        className="w-full pt-44   md:pt-36 transition-all duration-1000 px-5
        "
      >
        <div

          className="max-w-screen-lg mx-auto flex flex-col justify-center w-full 
        bg-[#242427]  flex-1 ring-1 ring-inset ring-gray-700/30 p-8 rounded-2xl  backdrop-blur-md
        "
        >
          <div className="pb-6">
            <h2 className="   text-4xl font-bold inline border-b-4 ">
              About Me{" "}
            </h2>
          </div>
          <div>
            <div className="text-xl mt-9 text-gray-400">
              <ul className="list-disc text-sm md:text-xl tracking-wide leading-relaxed">
                <li className="mt-3 list-none">
                  Hello! I'm Omkar, a creative 21-year-old who loves building
                  products with code. I've always been curious about how things
                  work behind the scenes, and this curiosity led me to the world
                  of programming. I began my programming journey with the C
                  programming language and later explored different domains,
                  discovering that web development excites me the most.
                </li>

                <li className="mt-3 list-none">
                  Since then, I have been working on improving my web
                  development skills. I'm passionate about building products on
                  the web and consider myself a good problem solver. I engage in
                  data structures and algorithms in Java to sharpen my
                  problem-solving skills. Currently, I am in my final year of
                  Engineering.
                </li>

                <li className="mt-3 list-none">
                  I'm always open to discussing frontend development, web
                  development, and problem-solving. Feel free to reach out
                  anytime!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
