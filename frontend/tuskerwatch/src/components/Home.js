import React from 'react';
import Navbar from './Navbar'; 
import Footer from './Footer'; 
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
    <Navbar /> 
    
    <div className="main-content">
      
      <div className="content-overlay">
        <h1>Welcome to My Website</h1>
        <p>This is a mobile-responsive webpage with a full-screen background image, a heading, a paragraph, and a footer.</p>
        <Link to="/upload" className="button">Start Generating</Link>
      </div>
    </div>
    <Footer /> 
    </div>
  );
}

export default Home;
