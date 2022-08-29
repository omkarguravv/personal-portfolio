import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { AiFillFilePdf } from 'react-icons/ai'

function SocialLinks() {
    const lists = [
        {
            id: 1,
            Social: (
                <>
                    <FaGithub color='white' size={30} />
                </>
            ),
            href: 'https://github.com/omkarguravv',

        },
        {
            id: 2,
            Social: (
                <>
                    <FaLinkedin color='white' size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/omkar-gurav-910b37211/',

        },
        {
            id: 3,
            Social: (
                <>
                    <FaTwitter color='white' size={30} />
                </>
            ),
            href: 'https://twitter.com/omkarguravv',

        },
        {
            id: 4,
            Social: (
                <>
                    <GrMail color='white' size={30} />
                </>
            ),
            href: 'mailto:omkargurav1920@gmail.com',

        },
        {
            id: 5,
            Social: (
                <>
                    <AiFillFilePdf color='white' size={30} />
                </>
            ),
            href: '../src/Files/Omkar-Gurav-Resume.pdf',
            download: true,
        }
    ]
    return (
        <>
            <div className='hidden  md:flex flex-col right-0 fixed top-[35%]'>
                <ul>
                {lists.map(({id,Social,href,download})=>(
                    <li key={id} className='flex justify-between items-center h-14 px-4 transform transition duration-500 hover:scale-110 '>
                        <a
                            className='items-center'
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

        </>
    )
}

export default SocialLinks
