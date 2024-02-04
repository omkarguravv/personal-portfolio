import React from 'react'
import html from "../assets/html.webp";
import css from "../assets/css.webp";
import javascript from "../assets/javascript.webp";
import reactImage from "../assets/react.webp";

import tailwind from "../assets/tailwind.webp";



function Skills() {

    const language = [
        {
            id: 1,
            src: javascript,
            title: "Javascript",
            style: "shadow-yellow-500"
        },
        {
            id: 2,
            src: reactImage,
            title: "React Js",
            style: 'shadow-blue-600'
        },
        {
            id: 3,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            title: "Python",
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
            title: "Java",
            style: 'shadow-red-500'
        },
        {
            id: 5,
            src: html,
            title: "HTML",
            style: 'shadow-orange-500'
        },
        {
            id: 6,
            src: tailwind,
            title: "Tailwind",
            style: 'shadow-sky-400'
        },
        {
            id: 7,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
            title: "Bootstrap",
            style: 'shadow-purple-500'
        },
        {
            id: 8,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
            title: "Figma",
            style: 'shadow-pink-500'
        },
        {
            id: 9,
            src: css,
            title: "CSS",
            style: 'shadow-blue-500'
        },
        {
            id: 10,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
            title: "Github",
            style: 'shadow-black'
        },
        {
            id: 11,
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            title: "Git",
            style: 'shadow-red-500'
        },
    ]


    return (
        <>
            <div
                name="Experience"
                className='pt-20  px-5

  transition-all duration-1000'>
                <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white mt-0 md:mt-16'>

                    <div>
                        <h2 className='text-4xl font-bold border-b-4
                         inline '>What I'm Good At.</h2>
                        <p className='py-6 text-gray-400 '>This are the technology I know</p>
                    </div>

                    <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-8  '>

                        {language.map(({ id, src, style, title }) => (
                            <div
                                key={id}
                                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img
                                  width="100%"
                                  height="auto"
                                 draggable="false" 
                                 src={src} 
                                 alt="" 
                                 className='w-20 mx-auto' />
                                <h3 className='mt-4 text-black dark:text-white '>{title}</h3>
                            </div>
                        ))}

                    </div>

                </div>

            </div>
        </>
    )
}

export default Skills
