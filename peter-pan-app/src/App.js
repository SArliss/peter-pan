import React, { Component } from "react";

//Custom Components
import Location from "./Components/Location";
import Story from "./Components/Story";

//CSS Component
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Location />
        <Story />
      </div>
    );
  }
}

export default App;
