import React, { Component } from "react";
import "./App.css";
import Donuts from './Components/Donuts.js';
import Contact from './Components/Contact.js';


// Custom components
import Header from './Components/Header'
import Footer from './Components/Footer'


class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">

        <Header />
        <Donuts/>
        <Contact/>
        <Footer />

      </div>
    );
  }
}

export default App;
