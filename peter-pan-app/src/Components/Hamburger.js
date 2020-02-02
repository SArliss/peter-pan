import React, { Component } from "react";

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
      <div className="hamburger-wrapper">
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
        <button className="hamburger-click" onClick={() => this.toggleMenu()}>
          <div id="hamburger-icon"><span></span></div>
        </button>
        <div className="hamburger-content"></div>
      </div>
    );
  }
}

export default Hamburger;
