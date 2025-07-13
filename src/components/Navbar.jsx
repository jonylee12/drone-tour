import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png"; // Ajustează calea dacă ai pus altundeva

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="DroneTour Logo" className="logo" />
        <span className="brand-name">Easy Flight</span>
      </div>
      <div className="navbar-right">
        <a href="#">Home</a>
        <a href="#">FlyShop</a>
        <a href="#">Cart</a>
        <a href="#">Checkout</a>
        <a href="#">Orders</a>
      </div>
    </nav>
  );
};

export default Navbar;
