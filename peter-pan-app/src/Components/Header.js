import React from "react";


function Header() {
  return (
    <div className="fixed-wrapper">

      <div className="fixed-header" id="fixed-header">
        <a href="tel:1-718-389-3676">(718) 389-3676</a>
        <p>Today’s Hours: 8:00AM TO 5:00PM</p>
        <a href="https://www.google.com/maps/search/?api=1&query=Peter+Pan+Donut+%26+Pastry%26nbsp%3BShop&query_place_id=ChIJfR8jHkRZwokRgllkzTBqhlM"
          target="_blank" rel="noopener noreferrer">727 Manhattan Ave, Brooklyn NY 11222
        </a>
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