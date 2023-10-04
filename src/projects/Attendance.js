import React from 'react'
import Login from '../images/Attendance_App/Attendance_App_1.jpg'
import Homepage from '../images/Attendance_App/Attendance_App_3.jpg'
import RegisterFace from '../images/Attendance_App/Attendance_App_2.jpg'
import DetectFace from '../images/Attendance_App/Attendance_App_4.jpg'
import Headers from '../components/Headers'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { ParticlesBG } from '../components/ParticlesBG';


function Attendance() {

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
                                    <span className='text-lg tracking-widest'>Java, XML</span>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <span className='text-lg tracking-widest'>Back End:</span>
                                <div className="flex gap-3">
                                    <span className='text-lg tracking-widest'>N/A</span>
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
                            <a href="https://github.com/nazarenomarkanthony060120/Attendance_Application" target="_blank" rel="noopener noreferrer">
                                <span className='hover:text-blue-400 hover:underline'>https://github.com/nazarenomarkanthony060120/Attendance_Application</span>
                            </a>
                        </div>
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>1. Login Page</span>
                                <div className="flex justify-center">
                                    <img src={Login} alt="Login Page" className=' h-96 w-96' />
                                </div>
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>2. Home Page</span>
                                <div className="flex justify-center">
                                    <img src={Homepage} alt="Login Page" className=' h-96 w-96' />
                                </div>
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>3. Register Face</span>
                                <div className="flex justify-center">
                                    <img src={RegisterFace} alt="Login Page" className=' h-96 w-96' />
                                </div>
                            </div>
                            
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>4. Detect Face</span>
                                <div className="flex justify-center">
                                    <img src={DetectFace} alt="Login Page" className=' h-96 w-96' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Attendance