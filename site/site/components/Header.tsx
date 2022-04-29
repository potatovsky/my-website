import React from "react";
import "../css/Header.scss";

const Header = () => {

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
          <li><a href="">Resume</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
