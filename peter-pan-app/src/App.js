import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        < Header
          // < Carrousel />
        />
        < Location />
        < Story />
        < Donuts />
        < Contact />
        < Footer />

      </div>
    );
  }
}

export default App;
