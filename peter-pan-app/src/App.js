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

      <div className="fixed-wrapper">
      <div className="fixed-header" id="fixed-header">
        <a href="tel:1-718-389-3676">(718) 389-3676</a>
        <p>Today’s Hours: 4:30 AM TO 8:00PM</p>
        <p>727 MANHATTAN AVE  BROOKLYN NY 11222</p>
      </div>
     
        <nav>
        <a href="/#location">HOURS & LOCATION</a>
        <a href="/#story">OUR STORY</a>
        <a href="/#donuts">DONUTS</a>
        <a href="/#contact">CONTACT US</a>
      </nav>
      </div>
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
