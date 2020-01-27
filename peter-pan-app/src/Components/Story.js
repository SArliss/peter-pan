import React from 'react'
import logo from '../Images/desktopcarousel2-group-1.png'

function Story() {
  return (
    <div id="story" className="Card-2">
      <div className="story-image">
        <h1 className="section-header">OUR STORY</h1>
      </div>
      <div className="story-section-logo">
        <img src={logo} />
      </div>
      <section className="story-text">
        <p>
          Peter Pan Donut & Pastry Shop is family owned and operated since it was established more than 60 years ago in Greenpoint, Brookyln. It's a neighborhood spot that locals hold dear, a place that new residents go as a rite of passage, and a tasty destination for those not lucky enough to live close by. Donna Siafakas and her husband Christos took the bakery over 30 years ago
        </p>
        <p>
          At Peter Pan, they haven't messed with much, including the design,which harkens back to the year the place first opened. The black and white signs listing the pricing for donuts are original, as is the shelving. There are no tables; the fantastic S-shaped counter is intimate - you might just make a new friend over one of our fresh donuts!
        </p>
      </section>
    </div >
  )
}

export default Story