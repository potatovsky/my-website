import React from "react";
import "../css/About.scss";

const Header = () => {

  return (
    <div className="about" id="about">
        <div className="about-text">
            <h1>About <span className="highlight">Me<span className="cursor">|</span></span></h1>
            <h2>My name is <span className="highlight">Ethan Peterson</span> and I am graduating from Michigan State University with a <span className="highlight">B.S. in Computer Science</span>.</h2>
            <p>Want to know more about me? You can find out more on <a href="https://www.linkedin.com/in/erpeterson18/" target="_blank" rel="noreferrer">LinkedIn</a>.</p>
        </div>
    </div>
  );
};

export default Header;