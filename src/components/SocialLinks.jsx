import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { AiFillFilePdf } from 'react-icons/ai'
import { HiOutlineArrowCircleUp } from 'react-icons/hi';

import useAnalyticsEventTracker from './useAnalyticsEventTracker';


function SocialLinks() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {


        const handleScrollButtonVisiblity = () => {
            window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);

        };

        window.addEventListener('scroll', handleScrollButtonVisiblity);

        return () => {

            window.removeEventListener('scroll', handleScrollButtonVisiblity);

        };

    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

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
            id: 2,
            Social: (
                <>
                    <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/omkar-gurav-910b37211/',

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
        }
    ]
    const gaEventTracker = useAnalyticsEventTracker('social-icons');

    return (
        <>
            <div className='hidden md:flex flex-col right-0 fixed top-[35%] transition-all duration-1000'>
                <ul>
                    {lists.map(({ id, Social, href, download }) => (
                        <li
                            aria-label={Social}
                            onClick={() => gaEventTracker(href)} key={id} className='flex justify-between items-center h-14 px-4 transform transition duration-500 hover:scale-110 '>
                            <a
                                aria-label={Social}
                                className='items-center text-indigo-700 dark:text-white'
                                download={download}
                                href={href} rel="noreferrer"
                                target='_blank'
                            >
                                {Social}
                            </a>
                        </li>
                    ))}

                </ul>
            </div>

            {/* scroll to top button */}
            {
                showButton && (
                    <div className=' z-10 md:flex flex-col right-2 fixed top-[91%] transition-all duration-1000'>

                        <HiOutlineArrowCircleUp onClick={scrollToTop} size={45} className='text-indigo-700 dark:text-white' />

                    </div>
                )
            }



        </>
    )
}

export default SocialLinks
