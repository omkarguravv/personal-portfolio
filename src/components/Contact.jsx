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
            <div name="Contact" className='pt-24 md:pt-20 pb-20 md:pb-0  w-full px-5
            duration-150 
             '>

                <div className='flex flex-col  justify-center max-w-screen-lg mx-auto h-full 
                        bg-[#242427]  flex-1 ring-1 ring-inset ring-gray-700/30 p-8 rounded-2xl  backdrop-blur-md
                        '>
                    <div className='pb-8'>
                        <h2 className='text-4xl font-bold inline   border-b-4
                       '>Contact Me </h2>
                        <p className='py-3 text-gray-400 '>Submit the form below to get in touch with me.</p>
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
                            aria-label="Send"
                                onClick={() => gaEventTracker("send-msg")}
                                className='mt-10 inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-white shadow-xl hover:bg-white/50  text-base font-bold px-5 py-2.5 justify-center text-black'>

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
