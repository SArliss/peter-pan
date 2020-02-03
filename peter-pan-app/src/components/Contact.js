import React from "react";
import banner from "../Images/peterpanbanner.png";
import donutGif from "../Images/donut-gif.gif";
import homerGif from "../Images/homer-gif.gif";

const Contact = () => {
  return (
    <div className="contact-wrapper" id="contact">
      <h1 className="contact-header">CONTACT US</h1>
      <p className="for-all-ques">
        <p>For all orders, questions and press inquiries, you can reach us at:</p>
        <a href="tel:1-718-389-3676">718-389-3676</a> 
        <p>Between 8AM to 4PM daily.</p>
      </p>
      <p className="we-love">
        We'd love to hear from you! Show us some love on our{" "}
        <a href="https://www.facebook.com/peterpandonuts/" target="_blank">social media</a>
      </p>
      <div className="img-wrapper">
        <img src={donutGif} alt="Donut GIF" />
        <img src={banner} alt="peter-pan-banner" />
        <img src={homerGif} alt="Donut GIF" />
      </div>
    </div>
  );
};

export default Contact;
