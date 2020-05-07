import React from "react";
import logo from "../Images/peter-pan-logo-green.png";
import frontPageDonuts from "../Images/carousel-image-5.png";

function Landing () {
  
  return (
    <div className="first-page" id="first-page">
      <div className="peter-pan-logo-green-container">
        <img src={logo} className="peter-pan-logo-green" alt="peter-pan-logo" />
      </div>

      <p className="header-tagline">
        Serving Greenpoint Fresh Donuts Everyday Since 1955.
      </p>
      
      <div>
        <img src={frontPageDonuts} className="front-page-donuts" alt="donuts"></img>
      </div>
    </div>
  );
}

export default Landing;
