import React from 'react';
import '../styles/Navbar.css'; // Your custom styles
import Logo from '../images/logo1.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="Logo" className="logo-img" />
        </a>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Research
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Team
              </a>
            </li>
            
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
