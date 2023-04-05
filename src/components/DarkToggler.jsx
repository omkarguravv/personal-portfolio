import React, { useState, useEffect } from 'react'
import { BsSunFill, BsFillMoonFill } from 'react-icons/bs'

function DarkToggler() {

    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const currentMode = localStorage.getItem('mode');
        if (currentMode === 'dark') {
          setIsDarkMode(true);
          document.documentElement.classList.add('dark');
        }

    }, [])

    const handlethemeSwitch = () => {
        setIsDarkMode(!isDarkMode);
        const mode = isDarkMode ? 'light' : 'dark';
        localStorage.setItem('mode', mode);
        document.documentElement.classList.toggle('dark');
    }

    return (
        <>

            {/* // toggler */}
            <div onClick={handlethemeSwitch} className=' flex w-20 h-10 bg-indigo-500 dark:bg-gray-600  m-10 rounded-full '>
                <span className={isDarkMode ? 'h-10 w-10 bg-white rounded-full transition-all duration-500 items-center' : 'h-10 w-10 bg-[#171E29]  rounded-full ml-10 transition-all duration-500 '}>
                    <div className=' flex text-center items-center mt-3 ml-3 '>
                        {isDarkMode ? <BsFillMoonFill color='black' /> : <BsSunFill color='white' />}
                    </div>

                </span>



            </div>



        </>
    )
}

export default DarkToggler
