import React, { Component } from "react";
import "./App.css";
import Donuts from './components/Donuts.js';
import Contact from './components/Contact.js';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Donuts/>
        <Contact/>
      </div>
    );
  }
}

export default App;
