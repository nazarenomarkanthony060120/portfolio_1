import React from 'react'
import { BsPerson } from 'react-icons/bs'
import { AiOutlineMessage } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import Facebook from '../images/facebook.svg'
import LinkedIn from '../images/linkedin.svg'
import Gmail from '../images/gmail.svg'

function Contact() {
    return (
        <div className="flex items-center justify-center  h-screen max-sm:px-10" id='contact'>
            <div className="mx-auto max-w-7xl text-white h-fit max-xl:h-fit max-md:grid-cols-1 gap-14">
                <div className="flex w-full items-center justify-center flex-col gap-4">
                    <span className='text-[55px] max-lg:text-[45px] max-md:text-[35px] max-sm:text-[25px] text-center font-bold font-[Poppins] '>LET'S CREATE A WORLD FULL OF RESPONSIVENESS AND CREATIVENESS</span>
                    <span className='text-xl'>Contact Me!</span>
                    <div className="flex justify-center items-center gap-5">
                        <a href="https://www.facebook.com/chowking7691" className=' transition-transform transform hover:scale-150' target="_blank" rel="noopener noreferrer">
                            <img src={Facebook} className=' w-10 h-10'/>
                        </a>
                        <a href="https://www.linkedin.com/in/mark-anthony-nazareno-372236288/" className=' transition-transform transform hover:scale-150' target="_blank" rel="noopener noreferrer">
                            <img src={LinkedIn} className=' w-10 h-10'/>
                        </a>
                        <a href="mailto:nazarenomarkanthony060120@gmail.com" className=' transition-transform transform hover:scale-150' target="_blank" rel="noopener noreferrer">
                            <img src={Gmail} className=' w-10 h-10'/>
                        </a>
                    </div>
                    {/* <div className="flex flex-col w-full gap-5 bg-white text-black rounded-lg max-sm:p-5 p-7">
                        <div className="text-center">
                            <span className='text-2xl font-bold'>CONTACT ME</span>
                        </div>
                        <div className="flex item-center border-2 border-gray-500 flex-wrap gap-2 rounded-lg px-3">
                            <div className="flex items-center">
                                <BsPerson className='h-full'/>
                            </div>
                            <input type="text" className='py-2 focus:outline-none' placeholder='Name'/>
                        </div>
                        <div className="flex item-center border-2 border-gray-500 flex-wrap gap-2 rounded-lg px-3">
                            <div className="flex items-center">
                                <HiOutlineMail className='h-full'/>
                            </div>
                            <input type="email" className='py-2 focus:outline-none' placeholder='Email'/>
                        </div>
                        <div className="flex border-2 border-gray-500 flex-wrap gap-2 rounded-lg px-3">
                            <div className="h-fit py-3">
                                <AiOutlineMessage className='h-full'/>
                            </div>
                            <textarea name="message" placeholder='Message' className='py-2 focus:outline-none w-fit' id="message"  rows="10"></textarea>
                        </div>
                        <div className="text-center">
                            <button className='w-full py-2 rounded border-2 border-cyan-500 shadow-xl hover:shadow-cyan-500 hover:bg-cyan-500 hover:text-white'>Submit</button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Contact