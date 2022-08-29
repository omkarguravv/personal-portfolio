import React from 'react'

function About() {
    return (
        <>
            <div
                name="About"
                className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
                <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>

                    <div className='pb-6'>
                        <h4 className='text-4xl font-bold inline border-b-4 border-gray-500'>About Me </h4>
                    </div>

                    <div>
                        <div className='text-xl mt-9'>
                            <span className=' font-semibold'>Currently,</span>
                            <ul className='list-disc text-sm md:text-xl '>

                                <li className='mt-3'>🎓I’m in #nd year pursuing B.E. in Information technology from University of Mumbai. I am always excited to learn new things, meet new people ,get connected with like minded people , share my experience, and learn from their experiences.</li>

                                <li className='mt-3'>💻I have experience working in languages and technologies such as JavaScript, Python, HTML, CSS , Firebase and java I am proficient with Git and GitHub and am learning React.js
                                </li>

                                <li className='mt-3'>✨I'm an open-source enthusiast , and contribute to project and enhance my skills
                                </li>

                                <li className='mt-3'> 👷 Try to build and develop new things. I enjoy working on Web development projects. Currently, I am working on few web development projects. Also, I love getting in Hackathons and attending tech workshops and attending tech meet-up.</li>

                                <li className='mt-3'>🔗I'm also exploring Blockchain.</li>
                            </ul>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About
