import React from 'react';
import '../styles/Navbar.css'; 
import Logo from '../images/logo1.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <a className="navbar-brand">
          <img src={Logo} alt="Logo" className="logo-img" />
        </a>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link to="/" className="nav-link">
            Home
            </Link>
              {/* <a className="nav-link" href="#">
               
              </a> */}
            </li>
            <li className="nav-item">
            <Link to="/about" className="nav-link">
            About Research
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/team" className="nav-link">
            Team
            </Link>
            </li>
            
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
