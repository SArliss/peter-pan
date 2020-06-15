import React from "react";
import bigDonut from "../Images/big-donut.png";

const Donuts = () => {
  return (
    <div className="donuts-wrapper" id="donuts">

      <div className="donuts-header-bg-image">
        <h1 className="section-header">DONUTS</h1>
      </div>

      <img src={bigDonut} id="big-donut" alt="donut"></img>

      <h3>Baked Fresh Daily. <a href="tel:1-718-389-3676">Order Ahead</a> Today!</h3>

      <div>
        <h3>All Donuts $1.25 | 6 $7.50 | 12 $13.99</h3>
      </div>

      <div className="all-donuts">

        <div>
          <h3>BEST SELLERS</h3>
          <p>Old Fashioned Glazed</p>
          <p>Red Velvet</p>
          <p>Blueberry</p>
          <p>Buttermilk</p>
          <p>Honey Dip</p>
          <p>Toasted Coconut</p>
        </div>

        <div>
          <h3>SPECIALTIES 1</h3>
          <p>Sugar Raisin</p>
          <p>White Cream Coconut</p>
          <p>Chocolate Coconut</p>
          <p>Cream Chocolate</p>
          <p>Sour Cream</p>
          <p>Old Fashioned Cake</p>
          <p>Old Fashioned Cruller</p>
          <p>Old Fashioned Cinnamon</p>
          <p>French Toast</p>
          <p>Sugar Jelly</p>
          <p>White Cream</p>
        </div>

        <div>
          <h3>SPECIALTIES 2</h3>
          <p>Jelly Powdered</p>
          <p>Double Chocolate</p>
          <p>Chocolate Chip</p>
          <p>Lemon Poppy</p>
          <p>Cappuccino</p>
          <p>Pistachio</p>
          <p>Banana Nut</p>
          <p>Black and White</p>
          <p>Linzer Tart</p>
          <p>Bavarian Cream</p>
          <p>Strawberry</p>
        </div>


        <div>
          <h3>SPECIALTIES 3</h3>
          <p>Espresso Cake</p>
          <p>Baked Apple Turnover</p>
          <p>Red Velvet</p>
          <p>Chocolate Cake</p>
          <p>Red Marble Cruller</p>
          <p>Blueberry Buttermilk</p>
          <p>S’mores</p>
          <p>Apple Crumb</p>
          <p>Plain Jelly</p>
          <p>Lemon</p>
          <p>Carrot</p>
        </div>

      </div>
    </div>
  );
};

export default Donuts;
