import React from "react";
import { useEffect, useRef } from 'react';
import "./Intro.scss";
import { init } from 'ityped'
import Typewriter from 'typewriter-effect';
import Resume from "../../files/Anugra_Shah_Resume.pdf";


export default function Intro() {



    return (
        <div className="intro" id="intro">

            <div className="wrapper">
                
                <h2>Hi There, I'm</h2>
                <h1>Anugra Shah</h1>
                <h3><span>
                    <Typewriter

                        options={{
                            strings: ["Web Developer", "Geospatial Data Analyst", "Cartographer"],
                            autoStart: true,
                            delay: 40,
                            loop: true,
                            deleteSpeed: 20
                        }}

                    /> </span></h3>


                <a href={Resume} download>
                    <button className="i-button">Download Resume</button>
                </a>

                <div className="socials">
                    <a href="https://github.com/anugra96" class="fa fa-github" target="_blank"></a>
                    <a href="https://www.linkedin.com/in/anugrashah/" class="fa fa-linkedin" target="_blank"></a>
                </div>

                <a href="#portfolio" className="arrow_down">
                    <img src="assets/down.png" alt="" />
                </a>

            </div>



        </div>
    )
}