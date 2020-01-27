import React from "react";

const Donuts = () => {
  return (
    <div className="donuts" id="donuts">
      <div className="image">
        <h1 className="section-header">DONUTS</h1>
      </div>
      <h2 className="baked-fresh">Baked Fresh Daily - Order Ahead Today!</h2>
      <p className="items">
        All Donuts <span className="price">$1.25</span> <br></br> 6{" "}
        <span className="price">$7.50</span>
        <br></br> 12 <span className="price">$13.99</span>{" "}
      </p>

      <p className="list">
        <span className="title">BEST SELLERS</span> <br></br> Old Fashioned
        Glazed <br></br> Red Velvet <br></br> Blueberry Buttermilk
        <br></br>Honey Dip <br></br> Toasted Coconut
      </p>
      <div>
      {/* <p>SPECIALTIES</p> */}

      </div>
    </div>
  );
};

export default Donuts;
