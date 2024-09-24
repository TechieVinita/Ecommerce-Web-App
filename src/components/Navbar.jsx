import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="navbar-logo-text">MyShop</Link>
      </div>
      <div className="navbar-links-container">
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="navbar-login">
          <Link to="/login" className="btn-login">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
