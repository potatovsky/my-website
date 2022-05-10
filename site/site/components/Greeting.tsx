import React from "react";
import '../css/Greeting.scss';
import Image from "./Image";
import ethan from '../images/ethan-in-787.jpg'
import Typewriter from 'typewriter-effect';

const Greeting = () => {
    const desc = "Fun project with United Airlines at O'Hare Airport! Inside a Boeing 787!";
    const name = "Ethan";

    const element = <Typewriter
        // onInit={(typewriter) => {
        //     typewriter.typeString(name)
        //     .start();
        // }}
        options={{
            strings: [name],
            autoStart: true,
            loop: true,
            delay: 300,
            }}
    />

    return (
        <div className="greeting" id="home">
            <div className="greeting-text">
                <h1>Hello! I&apos;m <span className="highlight">{element}</span></h1>
                <h2><span className="highlight">Software Engineer</span> based in the Chicagoland area</h2>
            </div>
            <Image image={ethan} desc={desc} maxWidth={"40%"}/>
        </div>
    );
  };
  
  export default Greeting;


