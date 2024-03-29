import React from "react";
import './intro.css';
import bg from '../../assets/personal.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';
const Intro = () => {
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Kasi</span> <br />Full-Stack Developer</span>
                <p className="introPara">I am a skilled Full-Stack Developer and Certified Cloud Engineer</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire Me" className="btnImg"/>Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
};

export default Intro;