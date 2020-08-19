import React from 'react';
import github from './images/github.png'
import facebook from './images/facebook.png'
import linkedin from './images/linkedin.png'
import instagram from './images/instagram.png'
import './Main.css';

function Main() {
    return (
        <div className="Main">
            <div className="text-center pb-5 pt-5">
                <h1 class="display-1">Howdy,</h1>
                <h3 class="display-4 p-4">My name is <span style={{ fontFamily: "sans-serif" }}><b>Shikhar Baheti</b></span> and I am a junior computer science major at <span style={{ color: "#500000" }}>Texas A&M University.</span></h3>
                <h4>I am minoring in <b>Cybersecurity</b> and <b>Mathematics</b> and have a certificate in <b>Holistic Leadership</b>.</h4>
            </div>
            <div className="text-center">
                <a href="https://github.com/shikharbaheti" rel="noopener noreferrer" target="_blank"><img alt="github" src={github} class="contact_logos" /></a>
                <a href="https://www.linkedin.com/in/shikharbaheti/" rel="noopener noreferrer" target="_blank"><img alt="linkedin" src={linkedin} class="contact_logos" /></a>
                <a href="https://www.instagram.com/shikharbaheti/" rel="noopener noreferrer" target="_blank"><img alt="instagram" src={instagram} class="contact_logos" /></a>
                <a href="https://www.facebook.com/shikharbaheti" rel="noopener noreferrer" target="_blank"><img alt="facebook" src={facebook} class="contact_logos" /></a>
            </div>
        </div>
    );
}

export default Main;
