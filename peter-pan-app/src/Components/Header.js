import React from "react";
import logo from '../Images/peter-pan-logo-green.png'
import carouselImage1 from '../Images/carousel-image-1.png'
import carouselImage2 from '../Images/carousel-image-2.png'
import carouselImage3 from '../Images/carousel-image-3.png'
import carouselImage4 from '../Images/carousel-image-4.png'
import carouselImage5 from '../Images/carousel-image-5.png'
import TinySlider from "tiny-slider-react";


function Header() {

  const settings = {
    lazyload: true,
    controls: false,
    arrowKeys: true,
    speed: 400,
    autoplayTimeout: 2900,
    autoplayButtonOutput: false,
    touch: true,
    autoplay: true,
    nav: false,
    loop: true,
    items: 1,
    gutter: 5,
    responsive: {
      420: {
        items: 1,
      }
    }
  }


  const imgs = [
    carouselImage1,
    carouselImage2,
    carouselImage3,
    carouselImage4,
    carouselImage5
  ];

  const loadingImage =
    "data:image/gif;base64,\
  R0lGODlhAQABAPAAAMzMzAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";


  return (
    <div>
      <div className="fixed-header" id="fixed-header">
        <a href="tel:1-718-389-3676">(718) 389-3676</a>
        <p>Today’s Hours: 4:30 AM TO 8:00PM</p>
        <p>727 MANHATTAN AVE  BROOKLYN NY 11222</p>
      </div>

      <nav>
        <a href="/#location">HOURS & LOCATION</a>
        <a href="/#story">OUR STORY</a>
        <a href="/#donuts">DONUTS</a>
        <a href="/#contact">CONTACT US</a>
      </nav>
      <div className="peter-pan-logo-green-container">
        <img src={logo} className="peter-pan-logo-green" />
      </div>
      <TinySlider settings={settings} className="carousel">
        {imgs.map((el, index) => (
          <div key={index} style={{ position: "relative" }}>
            <img
              className="carousel-images tns-lazy-img"
              id={`carousel-image${index}`}
              src={loadingImage}
              data-src={el}
              alt=""
            />
          </div>
        ))}
      </TinySlider>
      <p className="header-tagline">Serving Greenpoint Fresh Donuts Everyday Since 1955.</p>
    </div >
  )
}

export default Header;