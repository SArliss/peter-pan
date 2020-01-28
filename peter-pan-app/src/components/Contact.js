import React from "react";
import banner from "../Images/peterpanbanner.png";
import donutGif from "../Images/donut-gif.gif";

const Contact = () => {
  return (
    <div className="contact-wrapper" id="contact">
      <h1 className="contact-header">CONTACT US</h1>
      <p className="for-all-ques">
        For all orders, questions  and press inquiries, you can reach us
        at <a href="tel:1-718-389-3676">(718) 389-3676</a> between 8AM to 4PM daily
      </p>
      <p className="we-love">
        We'd love to hear from you! Show us some love on our <a href="https://www.facebook.com/peterpandonuts/">social media</a>
      </p>
      <div className="img-wrapper">
        <img src={banner} />
        <img src={donutGif} />
        <img src={donutGif} />
      </div>
    </div>
  );
};

export default Contact;
