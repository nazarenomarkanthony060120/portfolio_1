import React, { useState } from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import VisibilitySensor from 'react-on-visible';

function Skills() {

    const [ isReactJS, setIsReactJS ] = useState(false);
    const [ isHtml, setIsHtml ] = useState(false);
    const [ isCss, setIsCss ] = useState(false);
    const [ isJavascript, setIsJavascript ] = useState(false);
    const [ isTailwindCSS, setIsTailwindCSS ] = useState(false);
    const [ isBootstrap5, setIsBootstrap5 ] = useState(false);
    const [ isNodeJS, setIsNodeJS ] = useState(false);
    const [ isExpressJS, setIsExpressJS ] = useState(false);
    const [ isMySQL, setIsMySQL ] = useState(false);
    const [ isJava, setIsJava ] = useState(false);

    const [ isGoodCommunication, setIsGoodCommunication ] = useState(false)
    const [ isPassionFroProblemSolving, setIsPassionFroProblemSolving ] = useState(false)
    const [ isBasicMathematical, setIsBasicMathematical ] = useState(false)
    const [ isResourcefulness, setIsResourcefulness ] = useState(false)
    const [ isEasyToAdaptNewTech, setIsEasyToAdaptNewTech ] = useState(false)

    return (
        <>
            <div className=" h-screen  max-xl:h-fit max-xl:py-10" id='skills'>
                <div className="flex flex-col mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-white h-[83vh] max-xl:h-fit max-sm:px-7 max-md:grid-cols-1 gap-14">
                    <div className="flex flex-col gap-1">
                        <div className="text-center py-5">
                            <span className='text-2xl font-bold'>SKILLS & EXPERIENCES</span>
                        </div>
                        <div className="flex justify-evenly max-sm:flex-wrap gap-20 max-sm:gap-5">
                            <div className='flex flex-col w-full gap-5 order-1'>
                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between px-5">
                                        <span className='font-semibold'>REACT JS</span>
                                        <span className='font-semibold'>3 Months</span>
                                    </div>
                                    <VisibilitySensor onChange={() => setIsReactJS(true)} >
                                        <ProgressBar completed={ isReactJS ? 85 : 0} bgColor="#67e8f9" height="25px" baseBgColor="#d8d8d1" labelColor="#000" animateOnRender maxCompleted={100} customLabel="85" />
                                    </VisibilitySensor>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between px-5">
                                        <span className='font-semibold'>HTML</span>
                                        <span className='font-semibold'>1 Year</span>
                                    </div>
                                    <VisibilitySensor onChange={() => setIsHtml(true)} >
                                        <ProgressBar completed={ isHtml ? 90 : 0}  bgColor="#67e8f9" height="25px" baseBgColor="#d8d8d1" labelColor="#000" animateOnRender maxCompleted={100} customLabel="90" />
                                    </VisibilitySensor>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between px-5">
                                        <span className='font-semibold'>CSS</span>
                                        <span className='font-semibold'>1 Year</span>
                                    </div>
                                    <VisibilitySensor onChange={() => setIsCss(true)} >
                                        <ProgressBar completed={ isCss ? 90 : 0} bgColor="#67e8f9" height="25px" baseBgColor="#d8d8d1" labelColor="#000" animateOnRender maxCompleted={100} customLabel="90" />
                                    </VisibilitySensor>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between px-5">
                                        <span className='font-semibold'>JAVASCRIPT</span>
                                        <span className='font-semibold'>1 Year</span>
                                    </div>
                                    <VisibilitySensor onChange={() => setIsJavascript(true)} partialVisibility={true} >
                                        <ProgressBar completed={ isJavascript ? 85 : 0} bgColor="#67e8f9" height="25px" baseBgColor="#d8d8d1" labelColor="#000" animateOnRender maxCompleted={100} customLabel="85" />
                                    </VisibilitySensor>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between px-5">
                                        <span className='font-semibold'>TAILWIND CSS</span>
                                        <span className='font-semibold'>3 Months</span>
                                    </div>
                                    <VisibilitySensor onChange={() => setIsTailwindCSS(true)} partialVisibility={true} >
                                        <ProgressBar completed={ isTailwindCSS ? 90 : 0} bgColor="#67e8f9" height="25px" baseBgColor="#d8d8d1" labelColor="#000" animateOnRender maxCompleted={100} customLabel="90" />
                                    </VisibilitySensor>
                                </div>
                            </div>
                            <div className='flex flex-col w-full gap-5 order-2'>
                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between px-5">
                                        <span className='font-semibold'>BOOTSTRAP 5</span>
                                        <span className='font-semibold'>1 Year</span>
                                    </div>
                                    <VisibilitySensor onChange={() => setIsBootstrap5(true)} partialVisibility={true} >
                                        <ProgressBar completed={ isBootstrap5 ? 90 : 0} bgColor="#67e8f9" height="25px" baseBgColor="#d8d8d1" labelColor="#000" animateOnRender maxCompleted={100} customLabel="90" />
                                    </VisibilitySensor>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between px-5">
                                        <span className='font-semibold'>NODE JS</span>
                                        <span className='font-semibold'>3 Months</span>
                                    </div>
                                    <VisibilitySensor onChange={() => setIsNodeJS(true)} partialVisibility={true} >
                                        <ProgressBar completed={ isNodeJS ? 80 : 0} bgColor="#67e8f9" height="25px" baseBgColor="#d8d8d1" labelColor="#000" animateOnRender maxCompleted={100} customLabel="80" />
                                    </VisibilitySensor>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between px-5">
                                        <span className='font-semibold'>EXPERSS JS</span>
                                        <span className='font-semibold'>3 Months</span>
                                    </div>
                                    <VisibilitySensor onChange={() => setIsExpressJS(true)} partialVisibility={true} >
                                        <ProgressBar completed={ isExpressJS ? 80 : 0} bgColor="#67e8f9" height="25px" baseBgColor="#d8d8d1" labelColor="#000" animateOnRender maxCompleted={100} customLabel="80" />
                                    </VisibilitySensor>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between px-5">
                                        <span className='font-semibold'>MYSQL</span>
                                        <span className='font-semibold'>1 Year</span>
                                    </div>
                                    <VisibilitySensor onChange={() => setIsMySQL(true)} partialVisibility={true} >
                                        <ProgressBar completed={ isMySQL ? 85 : 0} bgColor="#67e8f9" height="25px" baseBgColor="#d8d8d1" labelColor="#000" animateOnRender maxCompleted={100} customLabel="85" />
                                    </VisibilitySensor>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between px-5">
                                        <span className='font-semibold'>JAVA</span>
                                        <span className='font-semibold'>1 Year</span>
                                    </div>
                                    <VisibilitySensor onChange={() => setIsJava(true)} >
                                        <ProgressBar completed={ isJava ? 95 : 0} bgColor="#67e8f9" height="25px" baseBgColor="#d8d8d1" labelColor="#000" animateOnRender maxCompleted={100} customLabel="95" />
                                    </VisibilitySensor>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-7">
                        <div className="text-center">
                            <span className='text-2xl font-bold'>ADDITIONAL SKILLS</span>
                        </div>
                        <div className="flex items-center justify-between max-xl:justify-evenly max-lg:justify-center flex-wrap gap-3">
                            <div className="flex items-center text-center flex-col flex-wrap gap-2">
                                <div className="w-24">
                                    <VisibilitySensor onChange={() => setIsGoodCommunication(true)} >
                                        <CircularProgressbar value={isGoodCommunication ? 90 : 0} styles={buildStyles({ textColor: "white", pathTransitionDuration: 1, pathColor: "rgb(103, 232, 249)", trailColor: "gray" })} text={`90%`} animateOnRender maxValue={100} strokeWidth={12}/>
                                    </VisibilitySensor>
                                </div>
                                <span className='font-semibold'>Good communication skills</span>
                            </div>
                            
                            <div className="flex items-center text-center flex-col flex-wrap gap-2">
                                <div className="w-24">
                                    <VisibilitySensor onChange={() => setIsPassionFroProblemSolving(true)} >
                                        <CircularProgressbar value={isPassionFroProblemSolving ? 100 : 0} styles={buildStyles({ textColor: "white", pathTransitionDuration: 1, pathColor: "rgb(103, 232, 249)", trailColor: "gray" })} text={`100%`} animateOnRender maxValue={100} strokeWidth={12} />
                                    </VisibilitySensor>
                                </div>
                                <span className='font-semibold'>A passion for problem solving</span>
                            </div>
                            
                            <div className="flex items-center text-center flex-col flex-wrap gap-2">
                                <div className="w-24">
                                    <VisibilitySensor onChange={() => setIsBasicMathematical(true)} >
                                        <CircularProgressbar value={isBasicMathematical ? 100 : 0} styles={buildStyles({ textColor: "white", pathTransitionDuration: 1, pathColor: "rgb(103, 232, 249)", trailColor: "gray" })} text={`100%`} animateOnRender maxValue={100} strokeWidth={12} />
                                    </VisibilitySensor>
                                </div>
                                <span className='font-semibold'>Basic mathematical skills</span>
                            </div>
                            
                            <div className="flex items-center text-center flex-col flex-wrap gap-2">
                                <div className="w-24">
                                    <VisibilitySensor onChange={() => setIsResourcefulness(true)} >
                                        <CircularProgressbar value={isResourcefulness ? 95 : 0} styles={buildStyles({ textColor: "white", pathTransitionDuration: 1, pathColor: "rgb(103, 232, 249)", trailColor: "gray" })} text={`95%`}  maxValue={100} strokeWidth={12} />
                                    </VisibilitySensor>
                                </div>
                                <span className='font-semibold'>Resourcefulness</span>
                            </div>

                            <div className="flex items-center text-center flex-col flex-wrap gap-2">
                                <div className="w-24">
                                    <VisibilitySensor onChange={() => setIsEasyToAdaptNewTech(true)} >
                                        <CircularProgressbar value={isEasyToAdaptNewTech ? 90 : 0} styles={buildStyles({ textColor: "white", pathTransitionDuration: 1, pathColor: "rgb(103, 232, 249)", trailColor: "gray" })} text={`90%`} animateOnRender maxValue={100} strokeWidth={12} />
                                    </VisibilitySensor>
                                </div>
                                <span className='font-semibold'>Easy to Adapt new Technologies</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills