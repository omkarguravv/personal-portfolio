import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

import { Link } from 'react-scroll';
import DarkToggler from './DarkToggler';

function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

  const [hamburger, setHamburger] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home"
    },
    {
      id: 2,
      link: "About"

    },
    {
      id: 3,
      link: "Portfolio"
    },
    {
      id: 4,
      link: "Experience"
    },
    {
      id: 5,
      link: "Contact"
    },
  ]
  return (
    <>
      <div className='z-50 flex justify-between  items-center  w-full h-20 px-4 text-indigo-700 dark:text-white  fixed bg-white/8  backdrop-blur-sm transition-all duration-500 '>

        <div>

          <h1
            className='text-xl md:text-3xl ml-2 bold font-bold' >
            <h1 onClick={scrollToTop}  rel="noreferrer"> Omkar's Resume</h1>

          </h1>

        </div>

        <ul
          className='hidden md:flex '>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className=' link link-underline link-underline-black mx-2 hover:text-black dark:hover:text-gray-400 hover:scale-110  capitalize  cursor-pointer duration-300 space-x-3 '>
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>

          ))}

        </ul>

        <span className='hidden md:flex '>
          <DarkToggler />
        </span>

        <div className='flex items-center md:hidden'>
          <span className='md:hidden '>
            <DarkToggler />
          </span>
          <div
            className='z-10 cursor-pointer mx-4 md:hidden transition ease-in-out '
            onClick={() => {
              setHamburger(!hamburger)
            }}>
            {hamburger ? <FaTimes size={30} /> : <FaBars size={30} />}



          </div>
        </div>


        {hamburger && (
          <ul
            className='flex flex-col justify-center items-center absolute top-0 left-0  w-full h-screen  bg-black/90 backdrop-blur-2xl  transition ease-in-out delay-1000    '>

            {links.map(({ id, link }) => (

              <li
                key={id}
                className=' text-4xl font-semibold mt-5 cursor-pointer hover:text-gray-500 duration-1000 hover:scale-125  '>
                <Link onClick={() => setHamburger(!hamburger)} to={link} smooth duration={500}>
                  {link}
                </Link></li>



            ))}


          </ul>
        )}



      </div>
    </>
  )
}

export default Navbar
