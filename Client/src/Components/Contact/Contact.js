import React from "react";
import developerPng from "./images/developer-png.png";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:ishikaverma2317@gmail.com">
          Ishikaverma2317@gmail.com
        </a>

        <i class="fa fa-linkedin"></i>
        <a class="mail-links" href="https://www.linkedin.com/in/ishikaverma2317/">
          User Name: Ishika Verma
        </a>

        <i class="fa fa-github"></i>
        <a class="mail-links" href="https://github.com/ishikaverma17">
          ishikaverma17
        </a>

        <i class="fa fa-instagram"></i>
        <a class="mail-links" href="https://www.instagram.com/ishika_verma2317/">
          @ishika_verma2317
        </a>

        <i class="fa fa-phone"></i>
        <a class="mail-links" href="tel:+8303160366">
          +91 8303160366
        </a>
      </div>
      <div className="contactUs-pic">
        <img src={developerPng} alt="Profile"/>
      </div>
    </div>
  );
};

export default Contact;
