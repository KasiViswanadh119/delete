import React from 'react';
import './skill.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a skilled and passionate web designer with experience in developing user-friendly websites and I am also an expertise in Cloud Computing.I have skills in HTML,CSS,JavaScript,React as well as UI/UX designs too.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={WebDesign} alt="web" className='skillBarImg'/>
                    <div className='skillBarText'>
                    <h2>Web Design</h2>
                    <p>Can develop user-friendly websites</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={UIDesign} alt="UI" className='skillBarImg'/>
                    <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>Have skills in making good designs for users</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="App" className='skillBarImg'/>
                    <div className='skillBarText'>
                    <h2>App Design</h2>
                    <p>Also can make app development too..</p>
                    </div>
                </div>
            </div>
            </section>

    );
};
export default Skills;