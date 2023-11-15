import React from 'react';
import Navbar from './Navbar'; 
import Footer from './Footer'; 
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import Logo2 from '../images/logo2.png';

function Home() {
  return (
    <div>
      <Navbar /> 
      <div className="main-content">
        <div className="content-overlay text-center">
          <img
            src={Logo2}
            alt="Your Logo"
            className="centered-logo"
          />
          <p className= "p-30">
          "Welcome to our groundbreaking platform where the power of neural networks and deep learning converge to transform the way we identify and protect individual elephants. Our innovative technology leverages artificial intelligence to recognize these majestic creatures based on unique features and patterns, making a significant impact on conservation efforts. Join us in our mission to safeguard these magnificent animals through advanced individual elephant identification."
          </p>
          <Link to="/upload" className="btn btn-primary rounded-pill btn-lg green-button">IDENTIFY ELEPHANT</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
