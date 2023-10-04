import React from 'react'
import Login from '../images/Parent_Website/Parent_Website_1.png'
import Homepage from '../images/Parent_Website/Parent_Website_2.png'
import Enrollment from '../images/Parent_Website/Parent_Website_3.png'
import Subject from '../images/Parent_Website/Parent_Website_4.png'
import Grade from '../images/Parent_Website/Parent_Website_5.png'
import Attendance from '../images/Parent_Website/Parent_Website_6.png'
import Headers from '../components/Headers'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { ParticlesBG } from '../components/ParticlesBG';


function Parent() {

    const particlesInit = (engine) => {
        loadFull(engine);
    };

    return (
        <>
            <Particles init={particlesInit} options={ParticlesBG} />
            <Headers />
            <div className=" h-fit py-10" >
                <div className="flex flex-col mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-white h-fit max-xl:h-fit max-sm:px-7 max-md:grid-cols-1 gap-14">
                    <div className="flex flex-col gap-7">
                        <div className="text-center">
                            <span className='text-2xl font-bold uppercase tracking-widest'>Parent Website</span>
                        </div>
                        <div className="flex flex-col text-start text-yellow-500 gap-1">
                            <span className='text-lg uppercase tracking-widest'>Tech Stack Used:</span>
                            <div className="flex gap-3">
                                <span className='text-lg tracking-widest'>Front End:</span>
                                <div className="flex gap-3">
                                    <span className='text-lg tracking-widest'>HTML 5, Bootstrap 5, CSS, JavaScript</span>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <span className='text-lg tracking-widest'>Back End:</span>
                                <div className="flex gap-3">
                                    <span className='text-lg tracking-widest'>JavaScript</span>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <span className='text-lg tracking-widest'>Database:</span>
                                <div className="flex gap-3">
                                    <span className='text-lg tracking-widest'>Firebase Firestore </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <span className='tracking-widest'>GitHub Repositories: </span>
                            <a href="https://github.com/nazarenomarkanthony060120/Parent_Website" target="_blank" rel="noopener noreferrer">
                                <span className='hover:text-blue-400 hover:underline'>https://github.com/nazarenomarkanthony060120/Parent_Website</span>
                            </a>
                        </div>
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>1. Login Page</span>
                                <img src={Login} alt="Login Page" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>2. Homepage</span>
                                <img src={Homepage} alt="Homepage" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>3. Enrollment</span>
                                <img src={Enrollment} alt="View Pupil Information" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>4. Subject</span>
                                <img src={Subject} alt="Subject" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>5. Grade</span>
                                <img src={Grade} alt="Grade" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>6. Attendance</span>
                                <img src={Attendance} alt="View Pupils" className=' h-96 w-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Parent