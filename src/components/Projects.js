import React from 'react'
import { Link } from 'react-router-dom'
import MinimartInventorySystem from '../images/Minimart_Inventory_System.png'
import AdminWebsite from '../images/Admin_Website.png'
import TeacherWebsite from '../images/Teacher_Website.png'
import ParentWebsite from '../images/Parent_Website.png'
import AttendanceApp from '../images/Attendance_App.jpg'

import { Animate, AnimateGroup } from "react-simple-animate";

function Projects() {
    
    return (
        <div className=" h-fit py-10" id='projects'>
            <div className="flex flex-col mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-white h-fit max-xl:h-fit max-sm:px-7 max-md:grid-cols-1 gap-14">
                <div className="flex flex-col gap-4">
                    <div className="text-center">
                        <span className='text-2xl font-bold'>PROJECTS</span>
                    </div>
                    <div className="flex justify-evenly flex-wrap gap-14 max-xl:justify-evenly py-5">
                        <AnimateGroup play>
                            <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={0}>
                                <div className="relative h-fit w-fit bg-white text-black rounded-xl transition-transform transform hover:scale-110">
                                    <div className="absolute w-full h-full blur-lg bg-gradient-to-t from-green-500 via-yellow-500 to-red-500"></div>
                                    <div className="relative rounded-lg bg-white">
                                        <div className="text-center flex flex-col gap-3">
                                            <img src={MinimartInventorySystem} className='rounded-tl-lg rounded-tr-lg h-44' alt="Minimart Inventory System" />
                                            <span className='text-lg font-semibold'>Minimart Inventory System</span>
                                        </div>
                                        <div className="flex flex-col px-5 pt-5 pb-10 gap-5">
                                            <div className="flex flex-col gap-2">
                                                <span>Frontend: ReactJS, Axios, TailwindCSS</span>
                                                <span>Backend: NodeJS, ExpressJS, NodeMailer</span>
                                                <span>Database: MySQL</span>
                                            </div>
                                            <div className="text-center flex flex-col gap-4">
                                                <a href="https://github.com/nazarenomarkanthony060120/Minimart_Inventory_System" target="_blank" rel="noopener noreferrer">
                                                    <button className='w-full py-2 rounded border-2 border-cyan-500 shadow-lg hover:shadow-cyan-500 hover:bg-cyan-500 hover:text-white'>Go To Github</button>
                                                </a>
                                                <Link to="/minimart">
                                                    <button className='w-full py-2 rounded border-2 border-green-500 shadow-lg hover:shadow-green-500 hover:bg-green-500 hover:text-white'>View</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Animate>
                            <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={1}>
                                <div className="relative h-fit w-fit bg-white text-black rounded-xl transition-transform transform hover:scale-110">
                                    <div className="absolute w-full h-full blur-lg bg-gradient-to-t from-green-500 via-yellow-500 to-red-500"></div>
                                    <div className="relative rounded-lg bg-white">
                                        <div className="text-center flex flex-col gap-3">
                                            <img src={AdminWebsite} className='rounded-tl-lg rounded-tr-lg h-44' alt="Admin Website" />
                                            <span className='text-lg font-semibold'>Admin System</span>
                                        </div>
                                        <div className="flex flex-col px-5 pt-5 pb-10 gap-5">
                                            <div className="flex flex-col gap-2">
                                                <span>Frontend: JavaScript, Bootstrap 5, HTML 5</span>
                                                <span>Backend: Javascript</span>
                                                <span>Database: Firebase Firestore</span>
                                            </div>
                                            <div className="flex flex-col text-center gap-4">
                                                <a href="https://github.com/nazarenomarkanthony060120/Admin_Website" target="_blank" rel="noopener noreferrer">
                                                    <button className='w-full py-2 rounded border-2 border-cyan-500 shadow-lg hover:shadow-cyan-500 hover:bg-cyan-500 hover:text-white'>Go To Github</button>
                                                </a>
                                                <Link to="/admin">
                                                    <button className='w-full py-2 rounded border-2 border-green-500 shadow-lg hover:shadow-green-500 hover:bg-green-500 hover:text-white'>View</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Animate>
                            <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={2}>
                                <div className="relative h-fit w-fit bg-white text-black rounded-xl transition-transform transform hover:scale-110">
                                    <div className="absolute w-full h-full blur-lg bg-gradient-to-t from-green-500 via-yellow-500 to-red-500"></div>
                                    <div className="relative rounded-lg bg-white">
                                        <div className="text-center flex flex-col gap-3">
                                            <img src={TeacherWebsite} className='rounded-tl-lg rounded-tr-lg h-44' alt="Teacher Website" />
                                            <span className='text-lg font-semibold'>Teacher System</span>
                                        </div>
                                        <div className="flex flex-col px-5 pt-5 pb-10 gap-5">
                                            <div className="flex flex-col gap-2">
                                                <span>Frontend: JavaScript, Bootstrap 5, HTML 5</span>
                                                <span>Backend: Javascript</span>
                                                <span>Database: Firebase Firestore</span>
                                            </div>
                                            <div className="flex flex-col text-center gap-4">
                                                <a href="https://github.com/nazarenomarkanthony060120/Teacher_Website" target="_blank" rel="noopener noreferrer">
                                                    <button className='w-full py-2 rounded border-2 border-cyan-500 shadow-lg hover:shadow-cyan-500 hover:bg-cyan-500 hover:text-white'>Go To Github</button>
                                                </a>
                                                <Link to="/teacher">
                                                    <button className='w-full py-2 rounded border-2 border-green-500 shadow-lg hover:shadow-green-500 hover:bg-green-500 hover:text-white'>View</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Animate>
                            <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={3}>
                                <div className="relative h-fit w-fit bg-white text-black rounded-xl transition-transform transform hover:scale-110">
                                    <div className="absolute w-full h-full blur-lg bg-gradient-to-t from-green-500 via-yellow-500 to-red-500"></div>
                                    <div className="relative rounded-lg bg-white">
                                        <div className="text-center flex flex-col gap-3">
                                            <img src={ParentWebsite} className='rounded-tl-lg rounded-tr-lg h-44' alt="Parent Website" />
                                            <span className='text-lg font-semibold'>Parent System</span>
                                        </div>
                                        <div className="flex flex-col px-5 pt-5 pb-10 gap-5">
                                            <div className="flex flex-col gap-2">
                                                <span>Frontend: JavaScript, Bootstrap 5, HTML 5</span>
                                                <span>Backend: Javascript</span>
                                                <span>Database: Firebase Firestore</span>
                                            </div>
                                            <div className="flex flex-col text-center gap-4">
                                                <a href="https://github.com/nazarenomarkanthony060120/Parent_Website" target="_blank" rel="noopener noreferrer">
                                                    <button className='w-full py-2 rounded border-2 border-cyan-500 shadow-lg hover:shadow-cyan-500 hover:bg-cyan-500 hover:text-white'>Go To Github</button>
                                                </a>
                                                <Link to="/parent">
                                                    <button className='w-full py-2 rounded border-2 border-green-500 shadow-lg hover:shadow-green-500 hover:bg-green-500 hover:text-white'>View</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Animate>
                            <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={4}>
                                <div className="relative h-fit w-fit bg-white text-black rounded-xl transition-transform transform hover:scale-110">
                                    <div className="absolute w-full h-full blur-lg bg-gradient-to-t from-green-500 via-yellow-500 to-red-500"></div>
                                    <div className="relative rounded-lg bg-white">
                                        <div className="text-center flex flex-col gap-3">
                                            <img src={AttendanceApp} className='rounded-tl-lg rounded-tr-lg h-44' alt="Minimart Inventory System" />
                                            <span className='text-lg font-semibold'>Attendance App</span>
                                        </div>
                                        <div className="flex flex-col px-5 pt-5 pb-10 gap-5">
                                            <div className="flex flex-col gap-2">
                                                <span>Frontend: Java, XML</span>
                                                <span>Backend: N/A</span>
                                                <span>Database: Firebase Firestore</span>
                                            </div>
                                            <div className="flex flex-col text-center gap-4">
                                                <a href="https://github.com/nazarenomarkanthony060120/Attendance_Application" target="_blank" rel="noopener noreferrer">
                                                    <button className='w-full py-2 rounded border-2 border-cyan-500 shadow-lg hover:shadow-cyan-500 hover:bg-cyan-500 hover:text-white'>Go To Github</button>
                                                </a>
                                                <Link to="/attendance">
                                                    <button className='w-full py-2 rounded border-2 border-green-500 shadow-lg hover:shadow-green-500 hover:bg-green-500 hover:text-white'>View</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Animate>
                        </AnimateGroup>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects