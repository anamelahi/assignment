import React, { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () =>{
    navRef.current.classList.toggle(
  		"responsive_nav"
  	);
  };

  return (
    <nav>
      <div className="logo">
        <img
          src="https://diploy.in/wp-content/uploads/2023/10/diploy-logo-dark-copy.png"
          alt=""
        />
      </div>
      <div ref={navRef} className="menu">
      <div className="options">
        <a href="">Facts</a>
        <a href="">About</a>
        <a href="">Features</a>
        <a href="">Clients</a>
        <a href="">Review</a>
      </div>
      <div className="loginSignup">
        <button>Contact Us</button>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </div>
      </div>
      
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </nav>
  );
};

export default Navbar;
