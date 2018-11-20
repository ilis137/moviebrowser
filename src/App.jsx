import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Moviebrowser from "./Components/Moviebrowser/Moviebrowser";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Moviebrowser />
      </div>
    );
  }
}

export default App;
