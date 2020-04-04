import React from 'react'
import logo from '../Images/peter-pan-logo-white.png'

function Story() {
  return (
    <div id="story">
      <div className="story-header-bg-image">
        <div className="story-section-header-wrapper">
          <h1 className="section-header">OUR STORY</h1>
        </div>
      </div>
      <div className="story-section-logo ">
        <img src={logo} alt="peter-pan-logo"/>
      </div>
      <div className="story-text-wrapper">
        <section className="story-text">
          <div className="story-div">
            <p>
              <span className="bold">Peter Pan Donut & Pastry Shop</span> is family owned and operated since it was established more than <span className="bold">60 years ago</span> in Greenpoint, Brookyln. It's a neighborhood spot that locals hold dear, a place that new residents go as a rite of passage, and a tasty destination for those not lucky enough to live close by. Donna Siafakas and her husband Christos took the bakery over 30 years ago.
        </p><p>
              At Peter Pan, they haven't messed with much, including the design,which harkens back to the year the place first opened. The black and white signs listing the pricing for donuts are original, as is the shelving. There are no tables; the fantastic S-shaped counter is intimate - you might just make a new friend over one of our fresh donuts!
        </p>
          </div>
        </section>
      </div>
    </div >
  )
}

export default Story