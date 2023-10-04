import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { ParticlesBG } from '../components/ParticlesBG';
import Projects from '../components/Projects';
import Headers from '../components/Headers';

function Project() {
    const particlesInit = (engine) => {
        loadFull(engine);
    };
    return (
        <>
            <Particles init={particlesInit} options={ParticlesBG} />
            <Headers />
            <Projects />
        </>
    )
}

export default Project