import React from 'react'

function Location() {
  return (
    <div id="location">
      <div className="hours-location-header-bg-image">
        <h1 className="section-header">HOURS & <br /> LOCATION</h1>
      </div>
      <div className="hours-location-inner-wrapper">
        <section className="address-wrapper">
          <a href="https://www.google.com/maps/search/?api=1&query=Peter+Pan+Donut+%26+Pastry%26nbsp%3BShop&query_place_id=ChIJfR8jHkRZwokRgllkzTBqhlM" target="_blank" rel="noopener noreferrer">
            <p>727 MANHATTAN AVE. BROOKLYN, NEW YORK 11222</p>
          </a>
        <a href="tel:1-718-389-3676">718-389-3676</a>
        <br></br>
        </section>
        <section className="hours-wrapper">
          <p><span className="bold">MON - FRI</span> 4:30AM - 8:00PM</p>
          <p><span className="bold">SAT</span> 5:00AM - 8:00PM</p>
          <p><span className="bold">SUN</span> 5:30AM - 7:00PM</p>
        </section>
      </div>
    </div>
  )
}

export default Location