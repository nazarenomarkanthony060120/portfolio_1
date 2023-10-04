import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { ParticlesBG } from '../components/ParticlesBG';
import Headers from '../components/Headers';
import Contact from '../components/Contact';

function Contacts() {
    const particlesInit = (engine) => {
        loadFull(engine);
    };
    return (
        <>
            <Particles init={particlesInit} options={ParticlesBG} />
            <Headers />
            <Contact />
        </>
    )
}

export default Contacts