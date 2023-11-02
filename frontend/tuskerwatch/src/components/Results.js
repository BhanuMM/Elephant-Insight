import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Results.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import infoicon from '../images/info.png';
// import annotatedimage from '/Users/bhanuji/Bhanuji/Projects/TuskerWatch/backend/resources/runs/detect/exp/Kamani.JPG';

function Results() {
  const location = useLocation();
  const results = location.state ? location.state.results : null;
  console.log(results[7]);

  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    // Make a request to get the image file
    console.log('Component is mounted');
    fetch('api/getimage/komali.JPG')
      .then((response) => response.blob())
      .then((blob) => {
        // Convert the blob data to a URL
        const objectURL = URL.createObjectURL(blob);
        setImageData(objectURL);
        console.log('url'+objectURL);
        console.log('imgdata'+imageData);
      })
      .catch((error) => {
        console.error('Error fetching image:', error);
      });
  }, []);

  useEffect(() => {
    // Log imageData inside this effect to see its updated value
    console.log('imageData:', imageData);
  }, [imageData]); // This effect runs when imageData changes

  // Define state to manage active tab
  const [activeTab, setActiveTab] = useState(0);

  // Function to change the active tab
  const changeTab = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  


  return (
    <div>
      <div className="Results">
        <Navbar />
        <div className="container">
          <div className="row mt-5 mb-3">
            {/* <div className="col-12 mt-3 text-center">
              <h1 className="lightfont">Results</h1>
            </div> */}
            <hr />
          </div>
          <div className="row">
            <div className="col-md-6">
              <p className="lightfont">
                
                This elephant has been identified by:
                {results[1].map((result, index) => (
                  <span key={index}>{result[0]}&nbsp;</span>
                ))}
              </p>
              <div className="image-box" style={{ maxWidth: '600px' }}>
              
                  <img
                  src={imageData}
                  alt="Annotated Image"
                  className="img-fluid"
                  style={{ maxWidth: '100%' }}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/Elephants/ele.JPG`}
                  alt="Your Image"
                  className="img-fluid"
                  style={{ maxWidth: '100%' }}
                />
              </div>
              <hr/>
              <h2 className="lightfont mt-2">Best Prediction</h2>
              <div className="row">
              
             
                {parseFloat(results[0][0][1]) < 50 && (
                 <div className="rounded-box mb-3" style={{  padding: '10px' }}>
                    Confidence is less than 50%.
                </div>
                )}
                <div className="col-md-6">
                  <div className="image-box" style={{ maxWidth: '300px' }}>
                 
                    <img
                      src={`${process.env.PUBLIC_URL}/images/Elephants/${results[0][0][0]}.JPG`}
                      alt="Your Image"
                      className="img-fluid"
                      style={{ maxWidth: '100%' }}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <h4 className="lightfont">Name: {results[0][0][0]}</h4>
                  <h4 className="lightfont">Confidence: {results[0][0][1]}%</h4>
                  {parseFloat(results[0][0][1]) > 50 && (
                 <div className="rounded-box-green mb-3" style={{  padding: '10px' }}>
                   
                    <Popup trigger={<button className='popupbutton'>+</button>} position="top left">
                     <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                    </Popup>
                    &nbsp; Confidence is more than 50%.
                </div>
                )}
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-5">
              <h2 className="lightfont mb-3">Top Predictions</h2>
              <div className="tabs-container mb-5">
                <ul className="tabs-list">
                    <li className={`tab-item ${activeTab === 6 ? 'active' : ''}`}
                    onClick={() => changeTab(6)}
                    > Top 5 Predictions</li>
                  {results[1].map((result, index) => (
                    <li
                      key={index}
                      className={`tab-item ${activeTab === index ? 'active' : ''}`}
                      onClick={() => changeTab(index)}
                    >
                      {result[0]} Predictions
                    </li>
                  ))}
                </ul>
                <div
                    key="6"
                    className={`tab-content ${activeTab === 6 ? 'active' : ''}`}
                  >
                    {results[0].map((result, index) => (
                    <div className="row mt-2">
                      <div className="col-md-6">
                        <div className="image-box" style={{ maxWidth: '200px' }}>
                          <img
                            src={`${process.env.PUBLIC_URL}/images/Elephants/${result[0]}.JPG`}
                            alt={result[0]}
                            className="feature-image"
                            style={{ maxWidth: '100%' }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h4 className="lightfont">Name: {result[0]}</h4>
                        <h4 className="lightfont">Confidence: {result[1]}%</h4>
                      </div>
                    </div>
                     ))}
                  </div>
                {results[1].map((result, index) => (
                  <div
                    key={index}
                    className={`tab-content ${activeTab === index ? 'active' : '6'}`}
                  > 
                    { results[result[1]].map((secondresult, innerIndex) => (
                    <div className="row mt-2">
                      <div className="col-md-6">
                        <div className="image-box" style={{ maxWidth: '200px' }}>
                          <img
                            src={`${process.env.PUBLIC_URL}/images/Elephants/${secondresult[0]}.JPG`}
                            alt={secondresult[0]}
                            className="feature-image"
                            style={{ maxWidth: '100%' }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h4 className="lightfont">Name: {secondresult[0]}</h4>
                        <h4 className="lightfont">Confidence: {secondresult[1].toFixed(4)}%</h4>
                      </div>
                    </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Results;
