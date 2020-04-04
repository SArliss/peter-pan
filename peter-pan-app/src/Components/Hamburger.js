import React, { Component } from "react";
import logo from "../Images/iphone-8-hamburgermenu-group.png";
class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      closed: false
    };
  }
  openMenu = () => {
    if (this.state.open === false) {
      this.setState({
        open: true
      });
    } else {
      this.setState({
        open: false
      });
    }
  };
  render() {
    return (
      <div>
        {!this.state.closed && (
          <div className="hamburger-wrapper">
            <button className="hamburger-click" onClick={() => this.openMenu()}>
              <div className="hamburger-icon"></div>
              <div className="hamburger-icon"></div>
              <div className="hamburger-icon"></div>
            </button>
            {this.state.open && (
              <div className="hamburger-background">
                <div onClick={() => {
                          this.openMenu();
                        }} id="x-button">
                  <div onClick={() => {
                          this.openMenu();
                        }} className="x-button">
                    <div onClick={() => {
                          this.openMenu();
                        }} className="x-btn">
                      <button
                        className="hamburger-close"
                        onClick={() => {
                          this.openMenu();
                        }}
                      ></button>
                    </div>
                  </div>
                </div>

                <a onClick={() => this.openMenu()} href="/#location">HOURS & LOCATION</a>
                <a onClick={() => this.openMenu()} href="/#story">OUR STORY</a>
                <a onClick={() => this.openMenu()} href="/#donuts">DONUTS</a>
                <a onClick={() => this.openMenu()} href="/#contact">CONTACT US</a>
              </div>
            )}
            <img
              src={logo}
              className="peter-pan-logo-white-mobile"
              alt="peter-pan-logo"
            />
          </div>
        )}
      </div>
    );
  }
}
export default Hamburger;
