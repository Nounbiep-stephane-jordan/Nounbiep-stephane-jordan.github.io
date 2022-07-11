import React from "react";
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="foot-text">
        <h1>Materchef876@gmail.com</h1>
      </div>
      <div className="images">
        <BsInstagram color="white" />
        <BsFacebook color="white" />
        <BsGithub color="white" />
      </div>
    </div>
  );
};

export default Footer;
