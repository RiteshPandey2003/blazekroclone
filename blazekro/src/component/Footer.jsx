// Footer.js
import React from "react";
import "../styleComponent/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section1">
        <div className="footer-list">
          <h3>Get Help</h3>
          <ul>
            <li>Order</li>
            <li>Return</li>
            <li>Feedback</li>
          </ul>
        </div>
        <div className="footer-list">
          <h3>Top Category</h3>
          <ul>
            <li>Fruit</li>
            <li>Vegitable</li>
            <li>snaks</li>
          </ul>
        </div>

        <div className="footer-list">
          <h3>About</h3>
          <ul>
            <li>About us</li>
            <li>Career</li>
            <li>Contact</li>
          </ul>
        </div>
        </div>
        <div className="footer-list">
      <h3>Social</h3>
          <ul>
            <li>facebook</li>
            <li>instagram</li>
            <li>twitter</li>
          </ul>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
