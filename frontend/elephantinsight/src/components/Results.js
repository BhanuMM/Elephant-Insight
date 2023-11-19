import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Results.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Results() {
  const location = useLocation();
  const results = location.state ? location.state.results : null;
  console.log(results[7]);

  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    console.log("wonwoenwoein");
      fetch('http://127.0.0.1:5000/api/getimage/' + results[7])
      .then((response) => response.blob())
      .then((blob) => {
        const objectURL = URL.createObjectURL(blob);
        setImageData(objectURL);
        console.log('Image data received:', objectURL);
      })
      .catch((error) => {
        console.error('Error fetching image:', error);
      });
  }, [results]);


  // Define state to manage active tab
  const [activeTab, setActiveTab] = useState(6);
  

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
              
              <div className="image-box" style={{ maxWidth: '600px' }}>
              
                  <img
                  src={imageData}
                  alt="Annotated Image"
                  className="img-fluid mb-1"
                  style={{ maxWidth: '100%' }}
                />
                {/* <img
                  src={`${process.env.PUBLIC_URL}/images/Elephants/ele.JPG`}
                  alt="Your Image"
                  className="img-fluid mb-1"
                  style={{ maxWidth: '100%' }}
                /> */}
              </div>
              <p className="lightfont">
                
                This elephant has been identified by : 
                {results[1].map((result, index) => (
                  <span key={index}>{result[0]}&nbsp;</span>
                ))}
              </p>
              <hr/>
              <h2 className="lightfontbold ">Best Prediction :</h2>
              <div className="row">
              
             
               
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
                  <h5 className="lightfont">Name:<span className='boldfont'> {results[0][0][0]}</span> </h5>
                  <h6 className="lightfont mb-1">Confidence: <span className='boldfont'> {results[0][0][1]}% </span> </h6>
                  {parseFloat(results[0][0][1]) > 60 && (
                    
                    <p style={{  fontSize: '12px' }}>
                   * Identification Confidence is more than 60%.
                    </p>
                )}
                 {parseFloat(results[0][0][1]) < 60 && (
                 <div className="rounded-box mb-3 mt-3" style={{  padding: '10px' }}>
                  <Popup trigger={<button className='popupbutton'>+</button>} position="top left">
                     <div>Our analysis has revealed a significant insight regarding user-provided images of elephants that fall outside the classes for which the models are trained. In such cases, it is highly likely that the models will produce predictions with a confidence level below 60% for the top-ranked prediction. This outcome can be attributed to the inherent rarity of an elephant not belonging to the trained classes possessing all the exact physical traits closely resembling those within the trained dataset.</div>
                    </Popup>
                    &nbsp; 
                    Confidence is less than 60%.
                </div>
                )}
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-5">
              <h2 className="lightfontbold mb-3">Top Predictions</h2>
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
                    {results[0].slice(0, 5).map((result, index) => (
                    <div className="row mt-2">
                      <div className="col-md-6 text-center">
                        <div className="image-box " style={{ maxWidth: '200px' }}>
                          <img
                            src={`${process.env.PUBLIC_URL}/images/Elephants/${result[0]}.JPG`}
                            alt={result[0]}
                            className="feature-image"
                            style={{ maxWidth: '100%' }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6" style={{ paddingTop: '30px' }}>
                        <h5 className="lightfont">Name: <span className='boldfontprecition'> {result[0]}</span></h5>
                        <h6 className="lightfont">Confidence: <span className='boldfontcon'> {result[1]}%</span></h6>
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
                      <div className="col-md-6 " style={{ paddingTop: '30px' }}>
                        <h5 className="lightfont">Name: <span className='boldfontprecition'>{secondresult[0]}</span></h5>
                        <h6 className="lightfont">Confidence: <span className='boldfontcon'>{(secondresult[1]*100).toFixed(4)}%</span></h6>
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
