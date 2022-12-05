import React from 'react'
import Omkar from "../assets/omkar.png"
import { IoIosArrowForward } from 'react-icons/io'
import {Link} from 'react-scroll'

function Home() {
    return (
        <>
            <div
                name="Home"
                className=' h-screen w-full 
                bg-white  dark:bg-gradient-to-b dark:from-black dark:to-gray-800  transition-all duration-1000 '
            >

                <div
                    className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 text-white md:flex-row transition-all duration-1000'>
                    <div
                        className='flex flex-col justify-center h-full'>
                        <h1
                            className='text-4xl sm:text-6xl font-bold text-indigo-700 dark:text-white  '>
                            Hi,
                            <h1 className='text-transparent  bg-clip-text bg-gradient-to-r from-white npm to-pink-100 text-indigo-700 dark:text-white'>
                                I'm Omkar Gurav
                            </h1>
                            <h2 className='dark:text-transparent  dark:bg-clip-text dark:bg-gradient-to-r dark:from-purple-400 dark:via-purple-500 dark:to-pink-600 
                            
                            text-transparent bg-clip-text text-black
                             '>FullStack Developer</h2>
                        </h1>
                        <h3 className='text-indigo-700 dark:text-white'> I am a passionate self-taught developer who loves to attend hackathons, events and build random things mostly.</h3>

                        <div>
                            <Link to='Portfolio'
                            smooth duration={500}
                                className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer '>

                                Portfolio
                                <span
                                    className='group-hover:rotate-90 duration-300'>

                                    <IoIosArrowForward
                                        size={25} className="ml-1" />

                                </span>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <img
                            src={Omkar}
                            alt="omkar"
                            className='w-1/2 rounded-full mx-auto md:w-2/3 lg:w-full' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home
