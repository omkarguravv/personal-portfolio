import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { AiFillFilePdf } from 'react-icons/ai'

import useAnalyticsEventTracker from './useAnalyticsEventTracker';

function SocialLinks() {

    const lists = [
        {
            id: 1,
            Social: (
                <>
                    <FaGithub  size={30} />
                </>
            ),
            href: 'https://github.com/omkarguravv',

        },
        {
            id: 2,
            Social: (
                <>
                    <FaLinkedin  size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/omkar-gurav-910b37211/',

        },
        {
            id: 3,
            Social: (
                <>
                    <FaTwitter  size={30} />
                </>
            ),
            href: 'https://twitter.com/omkarguravv',

        },
        {
            id: 4,
            Social: (
                <>
                    <GrMail  size={30} />
                </>
            ),
            href: 'mailto:omkargurav1920@gmail.com',

        },
        {
            id: 5,
            Social: (
                <>
                    <AiFillFilePdf  size={30} />
                </>
            ),
            href: '/images/Omkar-Gurav-Resume(current).pdf',
            download: true,
        }
    ]
    const gaEventTracker = useAnalyticsEventTracker('social-icons');

    return (
        <>
            <div className='hidden  md:flex flex-col right-0 fixed top-[35%] transition-all duration-1000'>
                <ul>
                    {lists.map(({ id, Social, href, download }) => (
                        <button onClick={()=>gaEventTracker(href)} key={id} className='flex justify-between items-center h-14 px-4 transform transition duration-500 hover:scale-110 '>
                            <a
                                className='items-center text-indigo-700 dark:text-white'
                                download={download}
                                href={href} rel="noreferrer"
                                target='_blank'
                            >
                                {Social}
                            </a>
                        </button>
                    ))}

                </ul>
            </div>

        </>
    )
}

export default SocialLinks
