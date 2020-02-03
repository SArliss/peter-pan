import React, { Component } from "react";
import logo from "../Images/iphone-8-hamburgermenu-group.png";

class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  openMenu = () => {
    this.setState({
      open: true
    });
  };

  render() {
    return (
      <div>
        {this.state.open && (
          <div className="hamburger-wrapper">
            <button className="hamburger-click" onClick={() => this.openMenu()}>
              <div className="hamburger-icon"></div>
              <div className="hamburger-icon"></div>
              <div className="hamburger-icon"></div>
            </button>
            <img
              src={logo}
              className="peter-pan-logo-white-mobile"
              alt="peter-pan-logo"
            />
            {this.state.open && (
              <div className="hamburger-background">
                <button
                  className="hamburger-click"
                  onClick={() => this.openMenu()}
                >
                  close
                </button>
                <a href="/#location">HOURS & LOCATION</a>
                <a href="/#story">OUR STORY</a>
                <a href="/#donuts">DONUTS</a>
                <a href="/#contact">CONTACT US</a>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Hamburger;
