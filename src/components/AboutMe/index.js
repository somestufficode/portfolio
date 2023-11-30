import React from 'react';
import './About.css';
import avi from "../../avi.jpg";


const About = () => {
    return (
        <>
        <div className="profile-image">
        <img src={avi} alt="Vincent" />
         </div>
         <div className="description-container">
        <div className="description">
        Hello! I'm a perpetual creative spirit constantly in pursuit of my next canvas for expressing myself. From painting and crafting music to coding and writing, I find joy in every medium as they offer a cathartic release. Though I initially pursued actuarial science in college due to my mathematical knack and passion for problem-solving, a personal hiatus led me to discover a fresh journey in software engineering. This newfound path reignites a childhood desire to create. Without the act of creating, I would feel incomplete!
        </div>
        </div>
        </>
    );
}

export default About;