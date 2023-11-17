import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/UploadPage.css';
import Navbar from './Navbar';
import Footer from './Footer';
// import Logo2 from '../images/logo2.png';
import Logo1 from '../images/logo1.png';
import loadi from '../images/test.gif';

function UploadPage() {
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [NoElephantError, setNoElephantError] = useState(false); // New loading state

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };

      reader.readAsDataURL(file);
      setUploadedImage(file);
      setNoElephantError(false);
    }
  };

  const handleIdentifyClick = () => {
    if (uploadedImage) {
      setLoading(true); // Show the loading screen

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
          console.log('BM - file uploaded', data.results);
          console.log( 'Top 5 Array length',data.results[0].length); 
          if (data.results[0].length===0){
            setNoElephantError(true);
          }else{
            navigate('/results', { state: { results: data.results } });
          }
          
        })
        .catch((error) => {
          console.error('Error uploading image:', error);
        })
        .finally(() => {
          setLoading(false); // Hide the loading screen
        });
    }
  };

  return (
    <div>
      <div className="UploadPage">
        <Navbar />
        <div className="container">
          <div className="row mt-5 mb-3">
            {/* <div className="col-12 mt-3 text-center">
              <img
                src={Logo2}
                alt="Your Logo"
                className="centered-logo"
                style={{ maxWidth: '400px' }}
              />
            </div> */}
            <hr />
          </div>
          <div className="row">
            <div className="col-md-6 text-center mt-3">
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
              { NoElephantError &&
                    <div className="rounded-box mb-3" style={{  padding: '10px' }}>
                      Warning: No Identifiable Elephant Found !
                            <br/>
                      Please ensure your image includes a visible elephant before proceeding.
                    </div>
              }
              {loading ? ( // Loading screen
                <div className="loading-screen">
                  <h3>
                  IDENTIFYING
              </h3>
                  <img
                    src={loadi}
                    alt="Uploaded Image"
                    className="img-fluid"
                    style={{ maxWidth: '90px' }}
                  />
                <h3>
 ELEPHANT
              </h3>
              </div>
              ) : imageSrc && (
                <div className="col-md-12 text-center image-box">
                  <button
                    className="btn btn-primary rounded-pill btn-lg green2-button mt-2 mb-2"
                    onClick={handleIdentifyClick}
                  >
                   START IDENTIFYING PROCESS 
                  </button>
                  <img
                    src={imageSrc}
                    alt="Uploaded Image"
                    className="img-fluid mt-2"
                    style={{ maxWidth: '600px' }}
                  />
                  
                </div>
              )}
            </div>
            <div className="col-md-6 px-5 mt-3">
            <img
                src={Logo1}
                alt="Your Logo"
                style={{ maxWidth: '450px' }}
              />
              <h4 className="lightfont mb-3">How This Works</h4>
              {/* <hr/> */}
              <ul className="lightfont">
                <li>Upload your image on the left.</li>
                <li>Display the uploaded image .</li>
                <li>Start identifying process</li>
              </ul>
              {/* {animalNames.length > 0 && (
                <div>
                  <h3>Animal Names:</h3>
                  <ul>
                    {animalNames.map((name, index) => (
                      <li key={index}>{name}</li>
                    )}
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
