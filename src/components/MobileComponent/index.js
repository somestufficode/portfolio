import React from 'react';
import fableton from '../../Fableton.gif';
import grubhubby from '../../grubhuby.gif';
import soundspace from '../../SoundSpace.gif';
import './MobileComponent.css';
import avi from "../../avi.jpg";

const MobileComponent = () => {
  const slides = [
    {
      title: "SoundSpace",
      subtitle: "MERN Stack",
      image: soundspace,
      description:
        "Soundspace, powered by the MERN stack and AWS S3, is a dynamic web app tailored to budding artists with grassroots followings. It offers a platform for artists to effortlessly upload tracks while AWS S3 ensures seamless data storage. The exploration page enables users to discover tracks by location, fostering engagement and insights into audience preferences. Soundspace redefines how emerging artists connect and resonate on a global scale.",
      link: "https://soundspace.onrender.com",
    },
    {
      title: "GrubHubby",
      subtitle: "Ruby on Rails & React",
      image: grubhubby,
      description:
        "GrubHubby is a sophisticated, yet simple, web application that mirrors the functionalities of the popular food delivery platform Grubhub. Built with a blend of Ruby on Rails for backend logic, React with Redux for seamless frontend interactivity, and PostgreSQL for robust data management, GrubHubby offers an intuitive and comprehensive solution for online food ordering and delivery. Leveraging AWS S3 for efficient data storage, GrubHubby ensures secure handling of images, menus, and user-generated content.",
      link: "https://grubhubby.onrender.com",
    },
    {
      title: "Fableton",
      subtitle: "Vanilla JS",
      image: fableton,
      description:
        "Fableton, utilizing vanilla JavaScript, offers an immersive beat sequencer with kick, snare, hi-hat, and bass tracks, alongside a dynamic piano roll for live melody harmonization. Control BPM, volume, and more in this user-friendly interface, catering to musicians of all levels, showcasing the potential of JavaScript for creative musical expression.",
      link: "https://vinicozzi.github.io/Fableton/",
    },
  ];
  return (
    <>
      <div className="title-container-mob">
        <h1 className="name-title-mob">Vincent Minicozzi</h1>
        <h2 className="position-title-mob">Software Engineer</h2>
        <h3 className="creative-title-mob">Full-Time Creative</h3>
      </div>
      <div className="description-container-mob">
        <img src={avi} alt="Avi" className="avi-image-mob" />
        <p className="description-mob">
          Hello! I'm a perpetual creative spirit constantly in pursuit of my next canvas for expressing myself. From painting and crafting music to coding and writing, I find joy in every medium as they offer a cathartic release. Though I initially pursued actuarial science in college due to my mathematical knack and passion for problem-solving, a personal hiatus led me to discover a fresh journey in software engineering. This newfound path reignites a childhood desire to create. Without the act of creating, I feel incomplete.
        </p>
      </div>
                <div className="projects-container-mob">
            {slides.map((slide, index) => (
                <div key={index} className="project-container-mob">
                <div className="project-slide-mob">
                    <img src={slide.image} alt={slide.title} className="project-image-mob" />
                    <h2 style={{ textAlign: 'center' }}>
                    <a href={slide.link} target="_blank" rel="noopener noreferrer">
                        {slide.title}
                    </a>
                    </h2>
                    <p className="project-description-mob">{slide.description}</p>
                </div>
                </div>
            ))}
            </div>
      <div className="contact-container-mob">
        <div className="contact-content-mob">
          <div className="contact-details-mob">
            <div className="desc-container-mob">
              <p className="get-in-touch">If you'd like to get in touch, feel free to reach out through the following channels:</p>
            </div>
            <p className="email-mob"><a href="mailto:vincentminicozzi00@gmail.com">vincentminicozzi00@gmail.com</a></p>
            <div className="social-links-mob">
              <a className="linkedin-link-mob" href="https://www.linkedin.com/in/minicozzi" target="_blank" rel="noopener noreferrer">Linkedin</a>
              <a className="github-link-mob" href="https://github.com/vinicozzi" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileComponent;