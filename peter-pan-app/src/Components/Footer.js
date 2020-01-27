import React from "react";
import facebook from "../Images/facebook-logo.png";
import instagram from "../Images/instagram-logo.png";
import yelp from "../Images/yelp-logo.png";
import maps from "../Images/map-logo.png";



function Footer() {
  return (
    <div>

      <footer>
        <div className="footer-icons">

          <a href="https://www.facebook.com/peterpandonuts/">
            <img src={facebook} />
          </a>

          <a href="https://www.instagram.com/peterpandonut">
            <img src={instagram} />
          </a>

          <a href="https://www.yelp.com/biz/peter-pan-donut-and-pastry-shop-brooklyn-2">
            <img src={yelp} />
          </a>

          <a href="https://www.google.com/maps/search/?api=1&query=Peter+Pan+Donut+%26+Pastry%26nbsp%3BShop&query_place_id=ChIJfR8jHkRZwokRgllkzTBqhlM">
            <img src={maps} />
          </a>

        </div>

        <div className="footer-text">
          2020 All Rights Reserved
        </div>

        <div className="footer-phone">
          <a href="tel:1-718-389-3676">(718) 389-3676</a>
        </div>

      </footer>

      <div className="designed-by">
        <p>DESIGNED BY POMS UX / POWERED BY SEI CHEETAHS</p>
      </div>

    </div>
  )
}

export default Footer;