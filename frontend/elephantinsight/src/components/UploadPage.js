import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/UploadPage.css';
import Navbar from './Navbar';
import Footer from './Footer';
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
              <h4 className="lightfont mb-4">How This Works</h4>

              <ul className="lightfont">

                <li><span className='boldfont'>Image Upload:  </span> <br/>

                  Users has to upload an image of an elephant to the application.</li>

                  <li > <span className='boldfont'>YOLO Model Processing:  </span> <br/>

                  The uploaded image undergoes processing through a YOLO (You Only Look Once) model. This model efficiently identifies specific features associated with elephants within the image.

                  <li><span className='boldfont'>Feature Extraction:  </span> <br/>

                  Each identified feature, such as ears, spine, face, and tail, is extracted from the image.</li>

                  <li><span className='boldfont'>CNN Model Utilization: </span>  <br/>

                  The extracted features are individually fed into pre-trained Convolutional Neural Network (CNN) models. Each CNN model is specialized in identifying elephants based on a specific physical trait.</li>


                  <li><span className='boldfont mt-5'>Predictions and Ensemble System:  </span> <br/>

                  The predictions generated by each CNN model are evaluated. An ensemble voting system is employed to combine these individual predictions, leveraging the strengths of each feature-specific model.</li>

                  finally the ensemble prediction and the predictions output by each feature is shown alongside the identified elephant features.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UploadPage;
