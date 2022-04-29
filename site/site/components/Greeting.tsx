import React from "react";
import '../css/Greeting.scss';
import Image from "./Image";
import ethan from '../images/ethan-in-787.jpg'

const Greeting = () => {
    const desc = "Fun project with United Airlines!";

    return (
        <div className="greeting" id="home">
            <div className="greeting-text">
                <h1>Hello! I&apos;m <span>Ethan</span></h1>
                <h2><span>Software Engineer</span> based in Chicago, IL</h2>
            </div>
            <Image image={ethan} desc={desc} />
        </div>
    );
  };
  
  export default Greeting;


