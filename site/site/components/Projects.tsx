import React from "react";
import "../css/Projects.scss";
import Image from "./Image";
import plane from "../images/united-airplane.jpg";

const Projects = () => {

    const desc = "United Airlines!";

    return (
        <div className="projects" id="projects">
            <div className="projects-text">
                <h1>Latest <span className="highlight">Projects<span className="cursor">|</span></span></h1>
            </div>
            <div className="project">
                <Image image={plane} desc={desc} maxWidth={600}/>
                <div className="project-desc">
                    <h1>United Airlines</h1>
                    <h2>January 2022 - May 2022</h2>
                    <ul>
                        <li>Worked on a team of five students in MSU senior capstone course.</li>
                        <li>Designed and implemented <a href="http://www.capstone.cse.msu.edu/2022-01/projects/united-airlines-training/" target="_blank" rel="noreferrer">United Airlines: Training Forecast Model</a>.</li>
                        <li>Worked directly with United Airlines to develop a complete project plan.</li>
                        <li>Produced video about project and delivered software product.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Projects;