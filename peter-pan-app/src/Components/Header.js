import React from "react";

function Header() {
  return (
    <div>

      <div className="fixed-header" id="fixed-header">
        <p>(718) 389-3676</p>
        <p>Today’s Hours: 4:30 AM TO 8:00PM</p>
        <p>727 MANHATTAN AVE  BROOKLYN NY 11222</p>
      </div>

      <nav>
        <a href="/#location">HOURS & LOCATION</a>
        <a href="/#story">OUR STORY</a>
        <a href="/#donuts">DONUTS</a>
        <a href="/#contact">CONTACT US</a>
      </nav>

    </div>
  )
}

export default Header;