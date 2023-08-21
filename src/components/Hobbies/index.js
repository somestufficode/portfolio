import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies-container">
        <div className="music">
            <div className="music-files">
                {/* <img src={soundspace} alt="SoundSpace" /> */}
            </div>
            <div className="soundspace-description">
                {/* <h2>SoundSpace</h2>
                <p>Soundspace, powered by the MERN stack and AWS S3, is a dynamic web app tailored to budding artists with grassroots followings. It offers a platform for artists to effortlessly upload tracks while AWS S3 ensures seamless data storage. The exploration page enables users to discover tracks by location, fostering engagement and insights into audience preferences. Soundspace redefines how emerging artists connect and resonate on a global scale.</p> */}
            </div>
        </div>
        <div className="art">
            <div className="art-images">
                {/* <img src={grubhubby} alt="GrubHubby" /> */}
            </div>
            <div className="art-description">
                {/* <h2>GrubHubby</h2>
                <p>GrubHubby is a sophisicated, yet simple, web application that mirrors the functionalities of the popular food delivery platform Grubhub. Built with a blend of Ruby on Rails for backend logic, React with Redux for seamless frontend interactivity, and PostgreSQL for robust data management, GrubHubby offers an intuitive and comprehensive solution for online food ordering and delivery. Leveraging AWS S3 for efficient data storage, GrubHubby ensures secure handling of images, menus, and user-generated content.</p> */}
            </div>
        </div>
    </div>    );
};

export default Hobbies;