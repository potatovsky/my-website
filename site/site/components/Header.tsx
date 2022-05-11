import React, { useState } from "react";
import "../css/Header.scss";
import Email from "./Email";

const Header = () => {

  const [enableResumeDrawer, setEnableResumeDrawer] = useState(false);
  const [enableContactDrawer, setEnableContactDrawer] = useState(false);
  const [enableEmail, setEnableEmail] = useState(false);

  const resumeDrawer = <div className="header-drawer"><a href="/resume.pdf">PDF</a></div> as JSX.Element;
  const contactDrawer = <div className="header-drawer"><a href="https://www.linkedin.com/in/erpeterson18/">LinkedIn</a>
    <a href="#!" onClick={() => {setEnableEmail(true);}}>Email</a></div> as JSX.Element;

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
          <li onMouseEnter={() => { setEnableResumeDrawer(true); }} onMouseLeave={() => { setEnableResumeDrawer(false); }}>
            <a href="">Resume</a>
            {enableResumeDrawer ? resumeDrawer : <React.Fragment />}
          </li>
          <li onMouseEnter={() => { setEnableContactDrawer(true); }} onMouseLeave={() => { setEnableContactDrawer(false); }}>
            <a href="">Contact</a>
            {enableContactDrawer ? contactDrawer : <React.Fragment />}
          </li>
        </ul>
      </nav>
      {enableEmail ? <Email setEnable={setEnableEmail}></Email> : <React.Fragment />}
    </div>
  );
};

export default Header;
