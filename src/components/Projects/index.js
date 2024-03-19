import React from 'react';
import './Projects.css';
import fableton from '../../Fableton.gif';
import grubhubby from '../../grubhuby.gif';
import soundspace from '../../SoundSpace.gif';

const Projects = () => {

    const slides = [
        {
          title: "SoundSpace",
          subtitle: "MERN Stack",
          image: soundspace
        },
        {
          title: "GrubHubby",
          subtitle: "Ruby on Rails & React",
          image: grubhubby
        },
        {
          title: "Fableton",
          subtitle: "Vanilla JS",
          image: fableton
        }
      ];

    return (
        <div className="projects-container">
            <div className="soundspace">
                <div className="soundspace-images">
                    <img src={soundspace} alt="SoundSpace" />
                </div>
                <div className="soundspace-description">
                <h2>
                    <a href="https://soundspace-0iyz.onrender.com/" target="_blank" rel="noopener noreferrer">
                        SoundSpace
                    </a>    
                </h2>   
                    <p>Soundspace, powered by the MERN stack and AWS S3, is a dynamic web app tailored to budding artists with grassroots followings. It offers a platform for artists to effortlessly upload tracks while AWS S3 ensures seamless data storage. The exploration page enables users to discover tracks by location, fostering engagement and insights into audience preferences. Soundspace redefines how emerging artists connect and resonate on a global scale.</p>
                </div>
            </div>
            <div className="grubhubby">
                <div className="grubhubby-images">
                    <img src={grubhubby} alt="GrubHubby" />
                </div>
                <div className="grubhubby-description">
                <h2>
                    <a href="https://grubhubby.onrender.com" target="_blank" rel="noopener noreferrer">
                        GrubHubby
                    </a>
                </h2>
                    <p>GrubHubby is a sophisicated, yet simple, web application that mirrors the functionalities of the popular food delivery platform Grubhub. Built with a blend of Ruby on Rails for backend logic, React with Redux for seamless frontend interactivity, and PostgreSQL for robust data management, GrubHubby offers an intuitive and comprehensive solution for online food ordering and delivery. Leveraging AWS S3 for efficient data storage, GrubHubby ensures secure handling of images, menus, and user-generated content.</p>
                </div>
            </div>
            <div className="fableton">
                <div className="fableton-images">
                    <img src={fableton} alt="Fableton" />
                </div>
                <div className="fableton-description">
                    {/* <h2>Fableton</h2> */}
                <h2>
                    <a href="https://vinicozzi.github.io/Fableton/" target="_blank" rel="noopener noreferrer">
                        Fableton
                    </a>    
                </h2>               
                     <p>Fableton, utilizing vanilla JavaScript, offers an immersive beat sequencer with kick, snare, hi-hat, and bass tracks, alongside a dynamic piano roll for live melody harmonization. Control BPM, volume, and more in this user-friendly interface, catering to musicians of all levels, showcasing the potential of JavaScript for creative musical expression.</p>
                </div>
            </div>
        </div>
    );
};
export default Projects;
