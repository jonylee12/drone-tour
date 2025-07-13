import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="DroneTour Logo" className="logo" />
        <span className="site-title">Easy Flight</span>
      </div>
      <nav className="navbar-right">
        <Link to="/">Home</Link>
        <Link to="/flyshop">FlyShop</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/orders">Orders</Link>
      </nav>
    </header>
  );
};

export default Header;
