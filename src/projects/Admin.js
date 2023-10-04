import React from 'react'
import Login from '../images/Admin_Website/Admin_Website_1.png'
import Dashboard from '../images/Admin_Website/Admin_Website_2.png'
import PupilList from '../images/Admin_Website/Admin_Website_3.png'
import UpdatePupil from '../images/Admin_Website/Admin_Website_4.png'
import ViewPupil from '../images/Admin_Website/Admin_Website_5.png'
import AddAccount from '../images/Admin_Website/Admin_Website_6.png'
import TeachersAccount from '../images/Admin_Website/Admin_Website_7.png'
import ParentsAccount from '../images/Admin_Website/Admin_Website_8.png'
import ViewEnrollment from '../images/Admin_Website/Admin_Website_9.png'
import ViewPayments from '../images/Admin_Website/Admin_Website_10.png'
import UpdatePayment from '../images/Admin_Website/Admin_Website_11.png'
import AddPayment from '../images/Admin_Website/Admin_Website_12.png'
import Subject from '../images/Admin_Website/Admin_Website_13.png'
import AddSubject from '../images/Admin_Website/Admin_Website_14.png'
import UpdateSubject from '../images/Admin_Website/Admin_Website_15.png'
import Headers from '../components/Headers'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { ParticlesBG } from '../components/ParticlesBG';

function Admin() {
    const particlesInit = (engine) => {
        loadFull(engine);
    };

    return (
        <>
            <Particles init={particlesInit} options={ParticlesBG} />
            <Headers />
            <div className=" h-fit py-10" >
                <div className="flex flex-col mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-white h-fit max-xl:h-fit max-sm:px-7 max-md:grid-cols-1 gap-14">
                    <div className="flex flex-col gap-10">
                        <div className="text-center">
                            <span className='text-2xl font-bold uppercase tracking-widest'>Admin Website</span>
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
                                    <span className='text-lg tracking-widest'>Firebase Firestore</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <span className='tracking-widest'>GitHub Repositories: </span>
                            <a href="https://github.com/nazarenomarkanthony060120/Admin_Website" target="_blank" rel="noopener noreferrer">
                                <span className='hover:text-blue-400 hover:underline'>https://github.com/nazarenomarkanthony060120/Admin_Website</span>
                            </a>
                        </div>
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>1. Login Page</span>
                                <img src={Login} alt="Login Page" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>2. Dashboard Page</span>
                                <img src={Dashboard} alt="Dashboard Page" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>3. Pupil List</span>
                                <img src={PupilList} alt="Pupil List" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>4. Update Pupil</span>
                                <img src={UpdatePupil} alt="Update Pupil" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>5. View Pupil</span>
                                <img src={ViewPupil} alt="View Pupil" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>6. Add Account</span>
                                <img src={AddAccount} alt="Add Account" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>7. Teachers Account</span>
                                <img src={TeachersAccount} alt="Teachers Account" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>8. Parents Account</span>
                                <img src={ParentsAccount} alt="Parents Account" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>9. View Enrollment</span>
                                <img src={ViewEnrollment} alt="View Enrollment" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>10. View Payments</span>
                                <img src={ViewPayments} alt="View Payments" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>11. Update Payments</span>
                                <img src={UpdatePayment} alt="Update Payments" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>12. Add Payments</span>
                                <img src={AddPayment} alt="Add Payments" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>13. Subject</span>
                                <img src={Subject} alt="Add Subject" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>14. Add Subject</span>
                                <img src={AddSubject} alt="Add Subject" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>15. Update Subject</span>
                                <img src={UpdateSubject} alt="Update Subject" className=' h-96 w-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
            
    )
}

export default Admin