import React, { useState } from "react";
import "../css/Projects.scss";
import Image from "./Image";
import plane from "../images/united-airplane.jpg";
import VideoEmbed from "../components/VideoEmbed";

const Projects = () => {
    const [enable, setEnable] = useState(false);

    const desc = "United Airlines!";

    return (
        <div className="projects" id="projects">
            <div className="projects-text">
                <h1>Latest <span className="highlight">Projects<span className="cursor">|</span></span></h1>
            </div>
            <div className="project">
                <Image image={plane} desc={desc} maxWidth={"500px"}/>
                <div className="project-desc">
                    <h1>United Airlines</h1>
                    <h2>January 2022 - May 2022</h2>
                    <ul>
                        <li>Worked on a team of five students in MSU senior capstone course.</li>
                        <li>Designed and implemented <a href="http://www.capstone.cse.msu.edu/2022-01/projects/united-airlines-training/" target="_blank" rel="noreferrer">United Airlines: Training Forecast Model</a>.</li>
                        <li>Worked directly with United Airlines to develop a complete project plan.</li>
                        <li>Produced <a href="#!" onClick={() => {setEnable(true);}}>video</a> about project and delivered software product.</li>
                    </ul>
                </div>
            </div>
            {enable ? <VideoEmbed embedId="vlNnsg1bU3A" setEnable={setEnable}/> : <React.Fragment></React.Fragment>}
        </div>
    );
};

export default Projects;