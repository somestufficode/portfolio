import React from 'react';
import './Projects.scss';
import fableton from '../../Fableton.gif';
import grubhubby from '../../grubhuby.gif';
import soundspace from '../../SoundSpace.gif';

const Projects = () => {

    const slides = [
        {
          title: "SoundSpace",
          subtitle: "MERN Stack",
          description: "Adventure is never far away",
          image: soundspace
        },
        {
          title: "GrubHubby",
          subtitle: "Ruby on Rails & React",
          description: "Let your dreams come true",
          image: grubhubby
        },
        {
          title: "Fableton",
          subtitle: "Vanilla JS",
          description: "A piece of heaven",
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
                    <h2>SoundSpace</h2>
                    <p>Project 1 description...</p>
                </div>
            </div>
            <div className="grubhubby">
                <div className="grubhubby-images">
                    <img src={grubhubby} alt="GrubHubby" />
                </div>
                <div className="grubhubby-description">
                    <h2>GrubHubby</h2>
                    <p>Project 2 description...</p>
                </div>
            </div>
            <div className="fableton">
                <div className="fableton-images">
                    <img src={fableton} alt="Fableton" />
                </div>
                <div className="fableton-description">
                    <h2>Fableton</h2>
                    <p>Project 3 description...</p>
                </div>
            </div>
        </div>
    );
};
export default Projects;
