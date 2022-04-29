import React from "react";
import Header from "./components/Header";
import Greeting from "./components/Greeting";
import './css/App.scss';
import About from "./components/About";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="body">
        <Greeting />
        <About />
      </div>
    </React.Fragment>
  );
};

export default App;
