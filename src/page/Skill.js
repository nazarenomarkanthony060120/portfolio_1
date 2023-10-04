import React from 'react'
import Skills from '../components/Skills'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { ParticlesBG } from '../components/ParticlesBG';
import Headers from '../components/Headers';


function Skill() {
    const particlesInit = (engine) => {
        loadFull(engine);
    };
    return (
        <>
            <Particles init={particlesInit} options={ParticlesBG} />
            <Headers />
            <Skills />
        </>
    )
}

export default Skill