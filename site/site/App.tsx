import React from "react";
import Header from "./components/Header";
import Greeting from "./components/Greeting";
import './css/App.scss';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="body">
        <Greeting />
      </div>
    </React.Fragment>
  );
};

export default App;
