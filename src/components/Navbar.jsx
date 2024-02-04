import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { AiFillFilePdf } from "react-icons/ai";
import useAnalyticsEventTracker from "./useAnalyticsEventTracker";

function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const gaEventTracker = useAnalyticsEventTracker("social-icons");

  const [hamburger, setHamburger] = useState(false);
  const lists = [
    {
      id: 1,
      Social: (
        <>
          <FaGithub size={20} />
        </>
      ),
      href: "https://github.com/omkarguravv",
    },
    {
      id: 2,
      Social: (
        <>
          <FaLinkedin size={20} />
        </>
      ),
      href: "https://www.linkedin.com/in/omkarguravv",
    },
    {
      id: 3,
      Social: (
        <>
          <FaTwitter size={20} />
        </>
      ),
      href: "https://twitter.com/omkarguravv",
    },
    {
      id: 4,
      Social: (
        <>
          <GrMail size={20} />
        </>
      ),
      href: "mailto:omkargurav1920@gmail.com",
    },
    {
      id: 5,
      Social: (
        <>
          <AiFillFilePdf size={20} />
        </>
      ),
      // href: '/images/Omkar-Gurav-Resume.pdf',
      href: "https://drive.google.com/file/d/1U94rRogKxrIfkFpUChAOt0IY9fWrZENg/view",

      download: true,
    },
  ];
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    {
      id: 4,
      link: "Experience",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];
  return (
    <>
      <div className="z-50 flex justify-between  items-center  w-full mt-5 md:mt-10 px-20 dark:text-white  fixed bg-white/8   transition-all duration-500">
        <div>
          <div className="text-xl md:text-3xl ml-2 bold font-bold">
            <h1 onClick={scrollToTop} rel="noreferrer">
              {" "}
            </h1>
          </div>
        </div>
        {/* desktop mode  */}
        <nav>
          <ul className="hidden md:flex bg-[#242427] rounded-full backdrop-blur-md p-5 text-sm  flex-1 ring-1 ring-inset ring-gray-700/30">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className=" link link-underline link-underline-black mx-2 hover:text-black dark:hover:text-gray-400 hover:scale-110  capitalize  cursor-pointer duration-300 space-x-3 "
              >
                <Link to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center md:hidden top-2 right-2 absolute">
          <div
            className="z-10 cursor-pointer mx-4 md:hidden transition ease-in-out "
            onClick={() => {
              setHamburger(!hamburger);
            }}
          >
            {hamburger ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>

        {hamburger && (
          <ul className="md:hidden absolute top-14 right-8 font-medium py-3 bg-[#242427] shadow-xl rounded-xl pointer-events-auto ring-1 ring-inset ring-gray-700/20   text-left px-10 pb-5">
            <nav className="flex flex-col ">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="text-sm font-semibold mt-5 cursor-pointer hover:text-gray-500 duration-1000 hover:scale-125  "
                >
                  <Link
                    onClick={() => setHamburger(!hamburger)}
                    to={link}
                    smooth
                    duration={500}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </nav>

            <nav className="flex gap-2 mt-5 ">
              {lists.map(({ id, Social, href, download }) => (
                <li
                  aria-label={Social}
                  onClick={() => gaEventTracker(href)}
                  key={id}
                  className=""
                >
                  <a
                    aria-label={Social}
                    className="items-center"
                    download={download}
                    href={href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {Social}
                  </a>
                </li>
              ))}
            </nav>
          </ul>
        )}
      </div>
    </>
  );
}

export default Navbar;
