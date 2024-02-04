import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { AiFillFilePdf } from 'react-icons/ai'

import useAnalyticsEventTracker from './useAnalyticsEventTracker';


function FooterSocialLinks() {

    const lists = [
        {
            id: 1,
            Social: (
                <>
                    <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/omkarguravv',

        },
        
        {
            id: 3,
            Social: (
                <>
                    <FaTwitter size={30} />
                </>
            ),
            href: 'https://twitter.com/omkarguravv',

        },
        {
            id: 4,
            Social: (
                <>
                    <GrMail size={30} />
                </>
            ),
            href: 'mailto:omkargurav1920@gmail.com',

        },
        {
            id: 5,
            Social: (
                <>
                    <AiFillFilePdf size={30} />
                </>
            ),
            // href: '/images/Omkar-Gurav-Resume.pdf',
            href: 'https://drive.google.com/file/d/1U94rRogKxrIfkFpUChAOt0IY9fWrZENg/view',
            download: true,
        },
        {
            id: 2,
            Social: (
                <>
                    <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/omkar-gurav-910b37211/',

        },
    ]

    const gaEventTracker = useAnalyticsEventTracker('social-icons');

    return (
        <>
        <div className=''>
            <div className=' bg-[#242427]  flex-1 ring-1 ring-inset ring-gray-700/30 p-8 rounded-t-2xl  backdrop-blur-md mt-10
                 '>


                <div className='flex justify-around  mx-2 mr-8  '>
                    {lists.map(({ id, Social, href, download }) => (
                        <button
                        aria-label={Social }
                        onClick={() => gaEventTracker(href)} key={id} className='md:hidden  transform transition duration-500 hover:scale-110 mt-5 md:mt-0 mb-5'>
                            <a
                            aria-label={Social}
                                className=' text-indigo-700 dark:text-white'
                                download={download}
                                href={href} rel="noreferrer"
                                target='_blank'
                            >
                                {Social}
                            </a>
                        </button>
                    ))}

                </div>

                    <div className='text-center  font-thin text-xl md:text-2xl hover:text-indigo-400 darkhover:text-gray-400 text-indigo-700 dark:text-white  '> Made by
                        <a aria-label="Omkar Gurav" className='underline underline-offset-2' href="https://github.com/omkarguravv"> Omkar Gurav</a>
                    </div>


            </div>
            </div>
        </>
    )
}

export default FooterSocialLinks
