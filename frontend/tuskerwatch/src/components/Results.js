import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Results.css';
import Navbar from './Navbar';
import Footer from './Footer';

function Results() {

  const location = useLocation();
  const results = location.state ? location.state.results : null;
  console.log(results);

  return (
    <div>
      <div className="Results">
        <Navbar />
        <div className="container">
          <div className="row mt-5 mb-3">
            <div className="col-12 mt-3 text-center">
              <h1 className="lightfont">Results</h1>
            </div>
            <hr />
          </div>
          <div className="row">
          <div className="col-md-6">
             <h2 className="lightfont mb-3">Instructions</h2>
                <p className="lightfont">
                Provide any instructions or additional information here.
                </p>
            <div className="image-box" style={{ maxWidth: '600px' }}>
                        <img
                src={`${process.env.PUBLIC_URL}/images/Elephants/ele.JPG`}
                alt="Your Image"
                className="img-fluid"
                style={{ maxWidth: '100%' }}
            />
            </div>
            <h2 className="lightfont mt-3">Best Prediction</h2>
            <div className="row">
    <div className="col-md-6">
      <div className="image-box" style={{ maxWidth: '300px' }}>
      <img
                src={`${process.env.PUBLIC_URL}/images/Elephants/Komali.JPG`}
                alt="Your Image"
                className="img-fluid"
                style={{ maxWidth: '100%' }}
            />
      </div>
    </div>
    <div className="col-md-6">
      <h3 className="lightfont">Name</h3>
      <h3 className="lightfont">Confidence</h3>
      <h3 className="lightfont">Age</h3>
    </div>
  </div>
            </div>

            <div className="col-md-6">
              <h2 className="lightfont mb-3">Top Predictions</h2>
              {results.map((result, index) => (
              <div className="row">
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
                    <h3 className="lightfont">Name ; {result[0]}</h3>
                    <h3 className="lightfont">Confidence ; {result[1]}%</h3>
                    <h3 className="lightfont">Age</h3>
                </div>
            </div>
                ))}

              {/* <ul className="lightfont">
                {results.map((result, index) => (
                  <li key={index}>
                    <div className="feature">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/Elephants/${result[0]}.JPG`}
                        alt={result[0]}
                        className="feature-image"
                        style={{ maxWidth: '80px' }}
                      />
                      <div className="feature-details">
                        <div className="feature-name">{result[0]}</div>
                        <div className="feature-confidence">{result[1]}%</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Results;
