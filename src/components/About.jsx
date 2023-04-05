import React from 'react'

function About() {
    return (
        <>
            <div
                name="About"
                className='w-full h-screen
                 bg-gradient-to-r from-rose-100 to-teal-100
                dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-900 dark:to-black

  transition-all duration-1000'>
                <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>

                    <div className='pb-6'>
                        <h2 className='text-4xl font-bold inline border-b-4 border-indigo-700 dark:border-gray-500 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'>About Me </h2>
                    </div>
                    <div>
                        <div className='text-xl mt-9 text-black dark:text-white'>
                            <span className=' font-semibold'>Currently,</span>
                            <ul className='list-disc text-sm md:text-xl '>

                                <li className='mt-3 list-none'>🎓I’m in 3rd year pursuing B.E. in Information technology from University of Mumbai. I am always excited to learn new things, meet new people ,get connected with like minded people , share my experience, and learn from their experiences.</li>

                                <li className='mt-3 list-none'>💻I have experience working in languages and technologies such as ,ReactJs , JavaScript, Python, HTML, CSS , Firebase and Java I am proficient with Git and GitHub and I am learning DSA with JAVA.
                                </li>

                                <li className='mt-3 list-none'>✨I'm an open-source enthusiast , and contribute to project and enhance my skills.
                                </li>

                                <li className='mt-3 list-none'> 👷 Try to build and develop new things. I enjoy working on Web development projects. Currently, I am working on few web development projects. Also, I love getting in Hackathons and attending tech workshops and attending tech meet-up.</li>

                                <li className='mt-3 list-none'>🔗I'm also exploring Blockchain.</li>
                            </ul>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About
