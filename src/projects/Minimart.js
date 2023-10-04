import React from 'react'
import LandingPage from '../images/Minimart_Inventory_System/Minimart_Inventory_System_1.png'
import Contact from '../images/Minimart_Inventory_System/Minimart_Inventory_System_2.png'
import Login from '../images/Minimart_Inventory_System/Minimart_Inventory_System_3.png'
import Register from '../images/Minimart_Inventory_System/Minimart_Inventory_System_4.png'
import ForgotPassword from '../images/Minimart_Inventory_System/Minimart_Inventory_System_5.png'
import ResetForgotPasswordLink from '../images/Minimart_Inventory_System/Minimart_Inventory_System_6.png'
import ResetPassword from '../images/Minimart_Inventory_System/Minimart_Inventory_System_7.png'
import Dashboard from '../images/Minimart_Inventory_System/Minimart_Inventory_System_8.png'
import AddProduct from '../images/Minimart_Inventory_System/Minimart_Inventory_System_9.png'
import UpdateProduct from '../images/Minimart_Inventory_System/Minimart_Inventory_System_10.png'
import DeleteProduct from '../images/Minimart_Inventory_System/Minimart_Inventory_System_11.png'
import Stocks from '../images/Minimart_Inventory_System/Minimart_Inventory_System_12.png'
import BuyStocks from '../images/Minimart_Inventory_System/Minimart_Inventory_System_13.png'
import Cash from '../images/Minimart_Inventory_System/Minimart_Inventory_System_14.png'
import CashIn from '../images/Minimart_Inventory_System/Minimart_Inventory_System_15.png'
import CashOut from '../images/Minimart_Inventory_System/Minimart_Inventory_System_16.png'
import Reports from '../images/Minimart_Inventory_System/Minimart_Inventory_System_17.png'
import Activities from '../images/Minimart_Inventory_System/Minimart_Inventory_System_18.png'
import DarkLightMode from '../images/Minimart_Inventory_System/Minimart_Inventory_System_19.png'
import SuccessfulResetPassword from '../images/Minimart_Inventory_System/Minimart_Inventory_System_20.png'
import Headers from '../components/Headers'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { ParticlesBG } from '../components/ParticlesBG';

function Minimart() {
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
                            <span className='text-2xl font-bold uppercase tracking-widest'>Minimart Inventory System</span>
                        </div>
                        <div className="flex flex-col text-start text-yellow-500 gap-1">
                            <span className='text-lg uppercase tracking-widest'>Tech Stack Used:</span>
                            <div className="flex gap-3">
                                <span className='text-lg tracking-widest'>Front End:</span>
                                <div className="flex gap-3">
                                    <span className='text-lg tracking-widest'>ReactJS, TailwindCSS </span>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <span className='text-lg tracking-widest'>Back End:</span>
                                <div className="flex gap-3">
                                    <span className='text-lg tracking-widest'>ExpressJS, Nodejs, NodeMailer </span>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <span className='text-lg tracking-widest'>Database:</span>
                                <div className="flex gap-3">
                                    <span className='text-lg tracking-widest'>MySQL </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <span className='tracking-widest'>GitHub Repositories: </span>
                            <a href="https://github.com/nazarenomarkanthony060120/Minimart_Inventory_System" target="_blank" rel="noopener noreferrer">
                                <span className='hover:text-blue-400 hover:underline'>https://github.com/nazarenomarkanthony060120/Minimart_Inventory_System</span>
                            </a>
                            
                        </div>
                        <a className='relative w-fit' href="https://nazarenomarkanthony060120.github.io/minimart-system/" target="_blank" rel="noopener noreferrer">
                            <div className="absolute w-full h-full blur bg-gradient-to-bl from-green-500 via-yellow-500 to-red-500"></div>
                            <button className='relative rounded-lg bg-cyan-300 hover:bg-cyan-500 hover:text-white text-black text-sm px-3 py-2'>Visit the website</button>
                        </a>
                        <span className='italic'>Note: I removed the backend of this website *</span>
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>1. Landing Page</span>
                                <img src={LandingPage} alt="Landing Page" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>2. Contact Developer</span>
                                <img src={Contact} alt="Contact Developer" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>3. Login Account</span>
                                <img src={Login} alt="Login Account" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>4. Register Account</span>
                                <img src={Register} alt="Register Account" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>5. Forgot Password</span>
                                <img src={ForgotPassword} alt="Forgot Password" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>6. Reset Forgot Password Link</span>
                                <img src={ResetForgotPasswordLink} alt="Reset Forgot Password Link" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>7. Reset Password</span>
                                <img src={ResetPassword} alt="Reset Password" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>8. Successful Reset Password</span>
                                <img src={SuccessfulResetPassword} alt="Successful Reset Password" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>9. Dashboard</span>
                                <img src={Dashboard} alt="Dashboard" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>10. Add Products</span>
                                <img src={AddProduct} alt="Add Products" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>11. Update Product</span>
                                <img src={UpdateProduct} alt="Update Product" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>12. Delete Product</span>
                                <img src={DeleteProduct} alt="Delete Product" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>13. Stocks</span>
                                <img src={Stocks} alt="Stocks" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>14. Buy Stocks</span>
                                <img src={BuyStocks} alt="Buy Stocks" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>15. Cash and Cash History</span>
                                <img src={Cash} alt="Cash and Cash History" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>16. Cash In</span>
                                <img src={CashIn} alt="Cash In" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>17. Cash Out</span>
                                <img src={CashOut} alt="Cash Out" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>18. Reports</span>
                                <img src={Reports} alt="Reports" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>19. Activities</span>
                                <img src={Activities} alt="Activities" className=' h-96 w-full' />
                            </div>
                            <div className="flex flex-col w-full gap-3">
                                <span className='text-lg'>20. Dark Mode | Light Mode</span>
                                <img src={DarkLightMode} alt="Dark Mode | Light Mode" className=' h-96 w-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Minimart