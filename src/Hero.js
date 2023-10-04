import React from 'react'
import Header from './components/Header';
import Home from './components/Home';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { ParticlesBG } from './components/ParticlesBG';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';


function Hero() {

    const particlesInit = (engine) => {
        loadFull(engine);
    };

    return (
        <>
            <Particles init={particlesInit} options={ParticlesBG} />
            <Header />
            <Home />
            <Skills />
            <Projects />
            <Contact />
        </>
    )
}

export default Hero