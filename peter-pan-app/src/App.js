import React, { Component } from "react";

//Custom Components
import Header from './Components/Header'
import Location from "./Components/Location";
import Story from "./Components/Story";
import Donuts from './Components/Donuts.js';
import Contact from './Components/Contact.js';
import Footer from './Components/Footer'

//CSS Component
import "./App.css";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Location />
        <Story />
        <Donuts/>
        <Contact/>
        <Footer />
      </div>
    );
  }
}

export default App;
