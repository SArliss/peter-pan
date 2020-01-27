import React from 'react'

function Location() {
  return (
    <div id="location" className="location-hours">
      <div className="hours-location-image">
        <h1 className="section-header">HOURS & LOCATION</h1>
      </div>
      <div className="location-text">
        <section className="address">
        <div className="location-text-div">
          <p>727 MANHATTAN AVE</p>
          <p>BROOKLYN, NEW YORK 11222</p>
          <p>(718) 389-3676</p>
          </div>
        </section>
        <section className="location-text">
          <div className="location-div">
          <p><span className="bold">MON - FRI</span> 4:30AM - 8:00PM</p>
          <p><span className="bold">SAT</span> 5:00AM - 8:00PM</p>
          <p><span className="bold">SUN</span> 5:30AM - 7:00PM</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Location