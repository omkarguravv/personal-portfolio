import React from 'react'

function About() {
    return (
        <>
            <div
                name="About"
                className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
                <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>

                    <div className='pb-6'>
                        <h2 className='text-4xl font-bold inline border-b-4 border-gray-500 text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-pink-600'>About Me </h2>
                    </div>

                    <div>
                        <div className='text-xl mt-9'>
                            <span className=' font-semibold'>Currently,</span>
                            <ul className='list-disc text-sm md:text-xl '>

                                <h4 className='mt-3'>🎓I’m in 3rd year pursuing B.E. in Information technology from University of Mumbai. I am always excited to learn new things, meet new people ,get connected with like minded people , share my experience, and learn from their experiences.</h4>

                                <h4 className='mt-3'>💻I have experience working in languages and technologies such as ,ReactJs , JavaScript, Python, HTML, CSS , Firebase and Java I am proficient with Git and GitHub and I am learning DSA with JAVA.
                                </h4>

                                <h4 className='mt-3'>✨I'm an open-source enthusiast , and contribute to project and enhance my skills.
                                </h4>

                                <h4 className='mt-3'> 👷 Try to build and develop new things. I enjoy working on Web development projects. Currently, I am working on few web development projects. Also, I love getting in Hackathons and attending tech workshops and attending tech meet-up.</h4>

                                <h4 className='mt-3'>🔗I'm also exploring Blockchain.</h4>
                            </ul>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About
