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
        <button onClick={() => this.toggleMenu()}>
          <img
            className="hamburger-icon"
            src="data:image/png;base64,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"
          alt="hamburger-menu-icon"/>
        </button>
        <div className="hamburger-content"></div>
      </div>
    );
  }
}

export default Hamburger;
