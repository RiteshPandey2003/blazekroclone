// Header.js
import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import "../styleComponent/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="navbar">
        <div className="logo">Blazekro</div>
        <div className="menu-icon">
          <FaCartShopping />
          <MdOutlineMenu onClick={toggleMenu} />
           <Link to="/signin" className="signin">Signin</Link>
        </div>
      </div>
      {isMenuOpen && (
        <div className="menu-container">
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
            <li>Item 6</li>
            <li>Item 7</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
