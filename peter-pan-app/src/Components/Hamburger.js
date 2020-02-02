import React, { Component } from "react";
import logo from "../Images/iphone-8-hamburgermenu-group.png";

class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  toggleMenu = () => {
    this.setState({
      active: !this.state.active
    });
  };

  render() {
    return (
      <div>
        <button className="hamburger-click" onClick={() => this.toggleMenu()}>
          <div className="hamburger-icon"></div>
          <div className="hamburger-icon"></div>
          <div className="hamburger-icon"></div>
        </button>
        {this.state.active && (
          <div className="hamburger-sidebar">
            <div className="hamburger-background">
              <a href="/#location">HOURS & LOCATION</a>
              <a href="/#story">OUR STORY</a>
              <a href="/#donuts">DONUTS</a>
              <a href="/#contact">CONTACT US</a>
            </div>
          </div>
        )}
        <div className="hamburger-wrapper">
          <img
            src={logo}
            className="peter-pan-logo-white-mobile"
            alt="peter-pan-logo"
          />
        </div>
      </div>
    );
  }
}

export default Hamburger;
