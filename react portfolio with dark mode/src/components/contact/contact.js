import React from "react";
import "./contact.css";
function Contact({ darkmode }) {
  const styles = {
    color: darkmode ? "white" : null,
  };
  return (
    <div className="contact padd" id="contact">
      <div
        className="blur t-blur1"
        style={{ background: "var(--purple)" }}
      ></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      <div className="contact-text">
        <span style={styles}>Get in Touch</span>
        <span>Contact me</span>
      </div>
      <div className="form-box">
        <form className="form">
          <input placeholder="name" type="text" />
          <input placeholder="email" type="email" />
          <textarea placeholder="message" />
          <button className="btn">send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
