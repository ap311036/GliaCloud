import React, { Component } from 'react';
import './App.scss';
import Timer from "./timer";
import Ajax from "./ajax";
import Multiples from "./multiples";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timer />
        <br />
        <Multiples />
        <br />
        <Ajax />
      </div>
    );
  }
}

export default App;
