import React from 'react';
import './Projects.css';
import fableton from '../../Fableton.gif';
import grubhubby from '../../grubhuby.gif';
import soundspace from '../../SoundSpace.gif';
import zealthy from '../../zealthy.gif';
import scheduler from '../../scheduler.gif';

const Projects = () => {
    const projects = [
        {
            title: "SoundSpace",
            image: soundspace,
            link: "https://soundspace-0iyz.onrender.com/",
            description: "Soundspace, powered by the MERN stack and AWS S3, is a dynamic web app tailored to budding artists with grassroots followings."
        },
        // {
        //     title: "GrubHubby",
        //     image: grubhubby,
        //     link: "https://grubhubby.onrender.com",
        //     description: "GrubHubby is a sophisticated, yet simple, web application that mirrors the functionalities of the popular food delivery platform Grubhub. Built with a blend of Ruby on Rails for backend logic, React with Redux for frontend interactivity, and PostgreSQL for data management, GrubHubby offers an intuitive solution for online food ordering and delivery."
        // },
        {
            title: "Work Scheduler",
            image: scheduler,
            link: "https://rockwall.vercel.app",
            description: "This is an active scheduler used by the employees at a part-time job that I supervise. (Please refrain from submitting any information on the site.)"
        },
        {
            title: "Fableton",
            image: fableton,
            link: "https://vinicozzi.github.io/Fableton/",
            description: "Fableton, utilizing vanilla JavaScript, offers an immersive beat sequencer with kick, snare, hi-hat, and bass tracks, alongside a dynamic piano roll for live melody harmonization. Control BPM, volume, and more in this user-friendly interface, catering to musicians of all levels."
        },
        {
            title: "Support Ticket Generator",
            image: zealthy,
            link: "https://zealthy-full-stack.vercel.app/",
            description: "Tech stack includes Next.js, TypeScript, and MongoDB. Offers end users an option to create a support ticket to handle a recent issue. In the admin panel, users can modify tickets by status, as well as responding to a specific support ticket."
        }
    ];

    return (
        <div className="projects-container">
            {projects.map((project, index) => (
                <div key={index} className={`project-item ${project.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className="project-image">
                        <img src={project.image} alt={project.title} />
                    </div>
                    <div className="project-description">
                        <h2>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                {project.title}
                            </a>
                        </h2>
                        <p>{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;