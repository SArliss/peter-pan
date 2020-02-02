import React from "react";

//Custom Components
import Carousel from "./Components/Carousel";
import Location from "./Components/Location";
import Story from "./Components/Story";
import Donuts from "./Components/Donuts.js";
import Contact from "./Components/Contact.js";
import Footer from "./Components/Footer";
import Header from "./Components/Header"
import Hamburger from "./Components/Hamburger";


//CSS Component
import "./App.css";

function App() {
  return (
    <div className="App">

      <Header />
      <Hamburger />
      <Carousel />
      <Location />
      <Story />
      <Donuts />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
