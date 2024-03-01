import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.instagram.com/officialsurajchoudhary__07?igshid=YmMyMTA2M2Y%3D" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://www.facebook.com/people/S%C3%BAr%C3%A4j-K%C3%BCm%C3%A5r-%C3%87h%C3%B8%C3%BAdh%C3%A4r%C3%BD/pfbid0jbyYR7XrgCY1FsauQHFrxgvfMj1GwCRTF7P3dvJdzqWP1UfpxQLTwmXhTFyaMSGnl/?mibextid=ZbWKwL" target="_blank" className="items">
            <CiFacebook className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/suraj-choudhary-4667767hj/" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>

          {/* <a href="https://www.google.com" target="_blank" className="items">
            <FaSquareXTwitter className="icons" />
          </a> */}
          
          <a href="https://github.com/Surajkumar4-source" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:csuraj982@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
