import React, { useState, useEffect } from 'react'
import { BsSunFill, BsFillMoonFill } from 'react-icons/bs'

function DarkToggler() {

    const [theme, setTheme] = useState(null);

    // toggler 
    const [isSelected, setIsSelected] = useState(false);




    useState(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
    }, []);



    useEffect(() => {
        if (localStorage.getItem('theme') === 'light') {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
            setIsSelected(true)
        }

    }, [theme])

    const handlethemeSwitch = () => {

        localStorage.setItem('theme', theme)
        setTheme(theme === "dark" ? "light" : "dark");

        // const setThemeInStorage = (selected) => {
        //     localStorage.setItem('isSelected', isSelected)
        // }
        setIsSelected(!isSelected);

    }

    return (
        <>

            {/* // toggler */}
            <div onClick={handlethemeSwitch} className=' flex w-20 h-10 bg-indigo-500 dark:bg-gray-600  m-10 rounded-full '>
                <span className={isSelected ? 'h-10 w-10 bg-white rounded-full transition-all duration-500 items-center' : 'h-10 w-10 bg-[#171E29]  rounded-full ml-10 transition-all duration-500 '}>
                    <div className=' flex text-center items-center mt-3 ml-3 '>
                        {isSelected ? <BsFillMoonFill color='black' /> : <BsSunFill color='white' />}
                    </div>

                </span>



            </div>



        </>
    )
}

export default DarkToggler
