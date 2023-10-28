// src/UploadPage.js
import React from 'react';
import '../styles/UploadPage.css';
import Navbar from './Navbar';
import Footer from './Footer';

function UploadPage() {
  return (
    <div className="UploadPage">
      <Navbar />
      <div className="upload-content">
        <div className="background-image"></div>
        <div className="content-overlay">
          <h1>Upload Your Image</h1>
          <button className="button">Upload Your Image</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UploadPage;
