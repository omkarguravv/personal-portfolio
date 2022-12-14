import React from 'react'
import emailjs from 'emailjs-com'
import { TbSend } from 'react-icons/tb'
import useAnalyticsEventTracker from './useAnalyticsEventTracker';

function Contact() {
    


    function sendEmail(e) {
        e.preventDefault();



        emailjs.sendForm(
            "service_i563b2m",
            "template_f4qj5rm",
            e.target,
            "MVjZ4PC2hKP8YUsFc"
        ).then(res => console.log(res)).catch(err => console.log(err))

        e.target.reset()



    }
    const gaEventTracker = useAnalyticsEventTracker('social-icons');


    return (
        <>
            <div name="Contact" className='pt-20 w-full h-screen
            bg-gradient-to-r from-rose-100 to-teal-100
                dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-900 dark:to-black
 p-4 text-black dark:text-white
            duration-150 
             '>

                <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full '>
                    <div className='pb-8'>
                        <h2 className='text-4xl font-bold inline   border-b-4
                        border-indigo-700  dark:border-gray-500  text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'>Contact Me </h2>
                        <p className='py-3 '>Submit the form below to get in touch with me.</p>
                    </div>

{/* social icons  */}
                    <div>

                    </div>

                    <div className=' flex justify-center items-center '>
                        <form onSubmit={sendEmail} action="" className='flex flex-col w-full md:w-1/2   '>
                            <input required type="text" name="name" placeholder='Your Name' className=' p-2 bg-transparent border-2 rounded-md 
                            text-black dark:text-white focus:outline-none border-black dark:border-white' />
                            <input required type="text" name='email' placeholder='Your E-Mail' className=' my-2 p-2 bg-transparent border-2 rounded-md text-black dark:text-white focus:outline-none border-black dark:border-white' />

                            <textarea required name="msg" placeholder='Enter your Message' className='p-2 bg-transparent border-2 rounded-md text-black dark:text-white focus:outline-none border-black dark:border-white' rows="10"></textarea>

                            <button
                                onClick={() => gaEventTracker("send-msg")}
                                className='text-white  bg-gradient-to-b from-cyan-500 to to-blue-500 px-6 py-3 my-4 mx-auto flex items-center rounded-md hover:scale-110 duration-300  text-xl button'>

                                Send

                                <TbSend className='ml-2' size={30} />
                            </button>
                        </form>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Contact
