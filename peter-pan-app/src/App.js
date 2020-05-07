import React from "react";

//Custom Components
import Landing from "./Components/Landing";
import Location from "./Components/Location";
import Story from "./Components/Story";
import Donuts from "./Components/Donuts.js";
import Contact from "./Components/Contact.js";
import Footer from "./Components/Footer";
import Header from "./Components/Header"
import Hamburger from "./Components/Hamburger";
import Powered from "./Components/Poweredby"

//CSS Component
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hamburger />
      <Landing />
      <Location />
      <Story />
      <Donuts />
      <Contact />
      <Footer />
      <Powered />

    </div>
  );
}

export default App;
