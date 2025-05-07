import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
  <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="MyWebsite Logo" className="logo-image" />
</div>
      <ul className="nav-links">
        <li><a href="">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
