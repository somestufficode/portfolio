import React from 'react';
import fableton from '../../Fableton.gif';
import grubhubby from '../../grubhuby.gif';
import soundspace from '../../SoundSpace.gif';
import avi from "../../avi.jpg";
import zealthy from '../../zealthy.gif';
import scheduler from '../../scheduler.gif';
import './MobileComponent.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import linkedinIcon from '../../linkedin.png'; 
import githubIcon from '../../github.png';
import resumeIcon from '../../resumeIcon.png';
import mail from '../../mail.png';

const MobileComponent = () => {
  const slides = [
    {
      title: "Work Scheduler",
      subtitle: "Next.js/Typescript/Tailwind/MongoDB",
      image: scheduler,
      link: "https://rockwall.vercel.app",
      description: "An active scheduler used by employees at a part-time job that I supervise. Please refrain from submitting any information."
    },
    {
      title: "Support Ticket Generator",
      subtitle: "Next.js/Typescript/Tailwind/MongoDB",
      image: zealthy,
      link: "https://zealthy-full-stack.vercel.app/",
      description: "Tech stack includes Next.js, TypeScript, and MongoDB. Users can create support tickets, and admins can manage and respond to them."
    },
    {
      title: "SoundSpace",
      subtitle: "MERN",
      image: soundspace,
      link: "https://soundspace-0iyz.onrender.com/",
      description: "Soundspace, powered by the MERN stack and AWS S3, is a dynamic web app tailored to budding artists with grassroots followings."
    },
    {
      title: "Fableton",
      subtitle: "Vanilla JS",
      image: fableton,
      link: "https://vinicozzi.github.io/Fableton/",
      description: "A beat sequencer with kick, snare, hi-hat, and bass tracks. Built using vanilla JS, it offers a piano roll for live melody harmonization."
    },
  ];

  return (
    <div className="mobile-profile-container">    

      <section className="mobile-profile-section">
        <img src={avi} alt="Vincent Minicozzi" className="mobile-profile-picture" />
        <h1 className="mobile-profile-name">Vincent Minicozzi</h1>
        <p className="mobile-profile-role">Software Engineer</p>

        <div className="mobile-buttons-container mobile-social-icons-inline">
          <a href="https://docs.google.com/document/d/e/2PACX-1vQTZ2WhHCVNKijDJ26s7q4bvGJ9c7J9Pc9IUCMcpOO8jRDLNBL5r-mf0i8uFIdIRsRuT-hn9qwWLFMl/pub" target="_blank" rel="noopener noreferrer" className="mobile-button-icon">
            <img className="mobile-resume-icon" src={resumeIcon} alt="Resume" />
          </a>          
          <a href="mailto:vincentminicozzi00@gmail.com" className="mobile-button-icon">
            <img className="mobile-email-icon" src={mail} alt="Email" />
          </a>      
        {/* </div> */}

        {/* <div className="mobile-social-icons mobile-social-icons-inline"> */}
          <a href="https://www.linkedin.com/in/minicozzi" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="mobile-icon" />
          </a>
          <a href="https://github.com/somestufficode" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="mobile-icon" />
          </a>
        </div>
      </section>

      <section className="mobile-projects-section">
        <Swiper spaceBetween={20} slidesPerView={1} centeredSlides pagination={{ clickable: true }}>
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="mobile-project-card">
                <img src={slide.image} alt={slide.title} className="mobile-project-image" />
                <div className="mobile-project-title-container">
                  <h2 className="mobile-project-title">{slide.title}</h2>
                  <a href={slide.link} target="_blank" rel="noopener noreferrer" className="mobile-button-blue">Visit</a>
                </div>
                <p className="mobile-project-description">{slide.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default MobileComponent;
