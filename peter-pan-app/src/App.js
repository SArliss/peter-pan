import React, { Component } from "react";
import "./App.css";

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
        < Header />
        < Footer />


      </div>
    );
  }
}

export default App;
