import React from "react";
import '../css/Greeting.scss';
import ethan from '../images/ethan-in-787.jpg'

const Greeting = () => {
    return (
        <div className="greeting">
            <div className="greeting-text">
                <h1>Hello! I&apos;m Ethan</h1>
                <h2>Software Engineer based in Chicago, IL</h2>
            </div>
            <div className="image">
                <img src={ethan} alt="Ethan in a 787" width={600}></img>
            </div>
        </div>
    );
  };
  
  export default Greeting;


