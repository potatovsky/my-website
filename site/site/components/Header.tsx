import React, { useState } from "react";
import "../css/Header.scss";

const Header = () => {

  const [enable, setEnable] = useState(false);

  const resumeDrawer = <div className="header-drawer"><a href="/ethan-peterson-resume.pdf">PDF</a></div> as JSX.Element;

  return (
    <div className="header">
      <div className="title">
        <a href="">Ethan Peterson</a>
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li onMouseEnter={() => {setEnable(true);}} onMouseLeave={() => {setEnable(false);}}>
            <a href="">Resume</a>
            {enable ? resumeDrawer : <React.Fragment/>}
          </li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
