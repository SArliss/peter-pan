import React from 'react'

function Location() {
  return (
    <div id="location">
      <div className="hours-location-header-bg-image">
        <h1 className="section-header">HOURS & LOCATION</h1>
      </div>
      <div className="hours-location-inner-wrapper">
        <section className="address-wrapper">
          <p>727 MANHATTAN AVE</p>
          <p>BROOKLYN, NEW YORK 11222</p>
          <p>(718) 389-3676</p>
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