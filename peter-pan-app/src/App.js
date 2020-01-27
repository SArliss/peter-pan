import React, { Component } from "react";
import "./App.css";

// Custom components
import Header from './Components/Header'

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        < Header />


      </div>
    );
  }
}

export default App;
