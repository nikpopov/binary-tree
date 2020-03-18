import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NodeRootContainer from "./NodeRootContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "rgb(255, 255, 255)"
    };
  }

  getBackground = () => {
    return `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`;
  };

  getRandomColor() {
    return Math.floor(Math.random() * 256);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <NodeRootContainer />
      </div>
    );
  }
}

export default App;
