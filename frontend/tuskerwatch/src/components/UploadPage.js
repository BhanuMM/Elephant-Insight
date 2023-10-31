import React, { useState, useEffect } from 'react';
import '../styles/UploadPage.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Logo2 from '../images/logo2.png';

function UploadPage() {
  const [imageSrc, setImageSrc] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  // const [animalNames, setAnimalNames] = useState([]);
  // useEffect(() => {
  //   fetch('http://127.0.0.1:5000/api/animal_names')
  //     .then((response) => response.json())
  //     .then((data) => setAnimalNames(data.animal_names))
  //     .catch((error) => console.error('Error fetching animal names:', error));
  // }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };

      reader.readAsDataURL(file);
      setUploadedImage(file);
    }
  };

  const handleIdentifyClick = () => {
    if (uploadedImage) {
      const formData = new FormData();
      formData.append('file', uploadedImage);

      fetch('http://127.0.0.1:5000/api/uploadimage', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            throw new Error('Image upload failed');
          }
        })
        .then((data) => {
          console.log("BM -file uploaded" ,data.results);
        })
        .catch((error) => {
          console.error('Error uploading image:', error);
        });
    }
  };

  return (
    <div>
      <div className="UploadPage">
        <Navbar />
        <div className="container">
          <div className="row mt-5 mb-3">
            <div className="col-12 mt-3 text-center">
              <img
                src={Logo2}
                alt="Your Logo"
                className="centered-logo"
                style={{ maxWidth: '400px' }}
              />
            </div>
            <hr />
          </div>
          <div className="row">
            <div className="col-md-6 text-center">
              <h1 className="lightfont"> Upload Your Image Here</h1>
              <form encType="multipart/form-data">
                {/* Add the form element with enctype set to "multipart/form-data" */}
                <input
                  type="file"
                  name="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="mb-3 lightfont rounded-pill"
                />
              </form>
              {imageSrc && (
                <div className="col-md-12 text-center image-box">
                  <button
                    className="btn btn-primary rounded-pill btn-lg green2-button mt-2 mb-3"
                    onClick={handleIdentifyClick} 
                  >
                    Start Identifying
                  </button>
                  <img
                    src={imageSrc}
                    alt="Uploaded Image"
                    className="img-fluid"
                    style={{ maxWidth: '600px' }}
                  />
                </div>
              )}
            </div>
            <div className="col-md-6 px-5">
              <h1 className="lightfont mb-3">How Elephantinsight Works</h1>
              <ul className="lightfont">
                <li>Step 1: Upload an image on the left.</li>
                <li>Step 2: View the uploaded image below.</li>
                <li>Step 3: Follow the instructions on the right.</li>
              </ul>
                {/* {animalNames.length > 0 && (
                <div>
                  <h3>Animal Names:</h3>
                  <ul>
                    {animalNames.map((name, index) => (
                      <li key={index}>{name}</li>
                    ))}
                  </ul>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UploadPage;
