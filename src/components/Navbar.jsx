import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

import { Link } from 'react-scroll';

function Navbar() {

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
      <div className='z-50 flex justify-between  items-center  w-full h-20 px-4 text-white bg-black fixed '>

        <div>
          <a target="_blank" href="../src/Files/Omkar-Gurav-Resume.pdf"  download={true} rel="noreferrer">
            <h1
              className='text-3xl ml-2 bold font-bold' >
              Omkar's Resume
            </h1>
          </a>

        </div>

        <ul
          className='hidden md:flex '>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className='link link-underline link-underline-black mx-2 hover:text-gray-400 hover:scale-105 capitalize  cursor-pointer duration-300 '>
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>

          ))}
        </ul>

        <div
          className='z-10 cursor-pointer mx-4 md:hidden'
          onClick={() => {
            setHamburger(!hamburger)
          }}>
          {hamburger ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {hamburger && (
          <ul
            className='flex flex-col justify-center items-center absolute top-0 left-0  w-full h-screen bg-gradient-to-b from-black via-black to-gray-800'>

            {links.map(({ id, link }) => (
              <li
                key={id}
                className=' text-4xl font-semibold mt-5 cursor-pointer hover:text-gray-500 '> 
                <Link  onClick={()=>setHamburger(!hamburger)} to={link} smooth duration={500}>
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
