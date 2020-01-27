import React from "react";
import facebook from "../Images/desktopcarousel2-copy-facebook@2x.png";
import instagram from "../Images/desktopourstory-instagram@2x.png";
import yelp from "../Images/desktopcarousel2-yelp@2x.png";
import maps from "../Images/desktopdonuts-map@2x.png";



function Footer() {
  return (
    <div>

      <footer>
        <div className="footer-text">

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

        <div className="footer-icons">
          2020 All Rights Reserved
        </div>

        <div className="footer-phone">
          (718) 389-3676
        </div>

      </footer>

      <div className="designed-by">
        <p>DESIGNED BY POMS UX / POWERED BY SEI CHEETAHS</p>
      </div>

    </div>
  )
}

export default Footer;