import React from "react";
import banner from "../Images/peterpanbanner.png";
import donutGif from "../Images/donut-gif.gif";
import homerGif from "../Images/homer-gif.gif";

const Contact = () => {
  return (
    <div className="contact-wrapper" id="contact">

      <h1 className="contact-header">CONTACT US</h1>

      <div>
        <p>For all orders, questions and press
        <br></br>
        inquiries, you can reach us at:
        <br></br>
          <a href="tel:1-718-389-3676">718-389-3676</a>
        </p>
      </div>

      <div>
        <p>We'd love to hear from you!
        <br></br>
        Show us some love on our{" "}
          <br></br>
          <a href="https://www.facebook.com/peterpandonuts/" target="_blank" rel="noopener noreferrer">social media</a>
        </p>
      </div>

      <div><p>Between 8AM to 5PM daily.</p></div>

      <div className="img-wrapper">
        <img src={donutGif} alt="Donut GIF" />
        <img src={homerGif} alt="Donut GIF" />
      </div>
    </div>
  );
};

export default Contact;
