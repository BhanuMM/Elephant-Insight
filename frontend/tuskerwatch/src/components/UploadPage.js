// src/UploadPage.js
import React, { useState } from 'react';
import '../styles/UploadPage.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Logo2 from '../images/logo2.png';

function UploadPage() {
  const [imageSrc, setImageSrc] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>

    
    <div className="UploadPage">
      <Navbar />
      <div className="container">
      <div className="row mt-5">
          <div className="col-12 text-center">
            <img src={Logo2} alt="Your Logo" className="centered-logo" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 text-center ">
            <h2>Upload Your Image</h2>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {imageSrc && (
            <div className="col-md-12 text-center image-box">
              <img src={imageSrc} alt="Uploaded Image" className="img-fluid" style={{ maxWidth: '500px' }} />
              <button className="btn btn-success  mt-5">Start Identifying</button>
            </div>
          )}
          </div>
          <div className="col-md-6 text-left">
            <h2>Instructions</h2>
            <ul>
              <li>Step 1: Upload an image on the left.</li>
              <li>Step 2: View the uploaded image below.</li>
              <li>Step 3: Follow the instructions on the right.</li>
              {/* Add more instructions as needed */}
            </ul>
          </div>
        </div>
        <div className="row">
         
        </div>
      </div>
      
    </div>
    <Footer />
    </div>
  );
}

export default UploadPage;
