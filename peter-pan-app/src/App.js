import React, { Component } from "react";

//Custom Components
import Header from "./Components/Header";
import Location from "./Components/Location";
import Story from "./Components/Story";
import Donuts from "./Components/Donuts.js";
import Contact from "./Components/Contact.js";
import Footer from "./Components/Footer";
import Hamburger from "./Components/Hamburger";

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
            <a href="https://www.google.com/maps/search/?api=1&query=Peter+Pan+Donut+%26+Pastry%26nbsp%3BShop&query_place_id=ChIJfR8jHkRZwokRgllkzTBqhlM"><p>727 MANHATTAN AVE BROOKLYN NY 11222</p></a>
          </div>

          <nav>
            <a href="/#location">HOURS & LOCATION</a>
            <a href="/#story">OUR STORY</a>
            <a href="/#donuts">DONUTS</a>
            <a href="/#contact">CONTACT US</a>
          </nav>
        </div>

        <Hamburger />
        <Header />
        <Location />
        <Story />
        <Donuts />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
