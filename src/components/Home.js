import React from 'react'
import Header from './Header'
import { TypeAnimation } from 'react-type-animation'
import Me from '../images/me.png'
import Facebook from '../images/facebook.svg'
import LinkedIn from '../images/linkedin.svg'
import Github from '../images/github.svg'
// import Upwork from '../images/upwork.svg'
import DownloadCV from '../assets/Resume_Mark_Anthony_Nazareno.pdf'
import { Animate } from 'react-simple-animate'

export default function Home() {

    const text = <TypeAnimation sequence={['Front End Engineer', 1000, 'Web Developer', 1000, 'ReactJS Developer', 1000]} speed={50} repeat={Infinity}/>;

    return (
        <>
            <div className="h-screen max-md:h-fit flex items-center justify-center" id='home'>
                <div className="grid grid-cols-2 h-fit items-center mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-white max-sm:gap-0 max-md:grid-cols-1 ">
                        <div className="flex justify-center text-start flex-col max-md:h-fit gap-6 max-sm:px-7 max-md:order-2">
                            <Animate play duration={1} delay={0} start={{ transform: 'translateX(-600px)'}}>
                                <div className="flex flex-col max-md:text-center">
                                    <span className='text-[40px] max-lg:text-3xl] max-md:text-2xl max-sm:text-xl font-extrabold font-sans'>MARK ANTHONY NAZARENO</span>
                                    <div className="max-md:text-center">
                                        <span className='text-[35px] max-lg:text-2xl max-md:text-xl max-sm:text-lg font-bold text-start'>And I'm a <span className='text-cyan-300'>{ text }</span></span>
                                    </div>
                                </div>
                            </Animate>
                            <Animate play duration={1.5} delay={0} start={{ transform: 'translateX(-1000px)'}}>
                                <span className='text-sm text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, tempore nam. Adipisci, possimus tempora debitis mollitia expedita sed magni vel nulla ratione incidunt repellendus.</span>
                            </Animate>
                            <Animate play duration={2} delay={0} start={{ transform: 'translateX(-1000px)'}}>
                                <div className="flex gap-5 h-7 max-md:justify-center">
                                    <a href="https://www.facebook.com/chowking7691" className=' transition-transform transform hover:scale-150' target="_blank" rel="noopener noreferrer">
                                        <img src={Facebook} className='h-full'/>
                                    </a>
                                    <a href="https://www.linkedin.com/in/mark-anthony-nazareno-372236288/" className=' transition-transform transform hover:scale-150' target="_blank" rel="noopener noreferrer">
                                        <img src={LinkedIn} className='h-full'/>
                                    </a>
                                    <a href="https://github.com/nazarenomarkanthony060120" className=' transition-transform transform hover:scale-150' target="_blank" rel="noopener noreferrer">
                                        <img src={Github} className='h-full'/>
                                    </a>
                                    {/* <a href="https://www.upwork.com/freelancers/~0125ba0c79116e1a87" className=' transition-transform transform hover:scale-150' target="_blank" rel="noopener noreferrer">
                                        <img src={Upwork} className='h-full'/>
                                    </a> */}
                                </div>
                            </Animate>
                            <Animate play duration={2.5} delay={0} start={{ transform: 'translateX(-1000px)'}}>
                                <div className="max-md:text-center">
                                    <a href={DownloadCV} download>
                                        <button className='rounded-lg bg-cyan-300 text-gray-800 shadow-lg hover:bg-cyan-500 hover:text-white hover:shadow-cyan-500 transition-transform transform hover:scale-110 font-bold w-fit px-3 py-2'>Download CV</button>
                                    </a>
                                </div>
                            </Animate>
                        </div>
                    <div className='px-10 max-md:py-10 flex justify-center w-full h-fit max-md:order-1  transition-transform transform hover:scale-125'>
                        <Animate play duration={1} delay={0} start={{ transform: 'translateX(600px)'}}>
                            <div className="relative">
                                <div className="absolute w-full h-full rounded-full blur-xl bg-gradient-to-t from-cyan-500 via-purple-500 to-pink-500"></div>
                                <div className="relative">
                                    <img src={Me} className="rounded-full bg-gradient-to-t from-cyan-500 via-purple-500 to-pink-500 w-96 max-md:h-72 max-md:w-72 max-sm:h-56 max-sm:w-56 shadow-xl " alt="My Image" />
                                </div>
                            </div>
                        </Animate>
                    </div>
                </div>
            </div>
        </>
    )
}
