// TeamPage.jsx

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import supervisorImage from '../images/user.jpg';
import coSupervisorImage from '../images/user.jpg';
import groupMember1Image from '../images/user.jpg';
import groupMember2Image from '../images/user.jpg';
import groupMember3Image from '../images/user.jpg';
import '../styles/TeamPage.css';

function TeamPage() {
  return (
    <div>
      <div className="TeamPage">
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
          </div>
          <div className="row mt-5">
          <div className="col-md-2 text-center">
            </div>
            <div className="col-md-4 text-center">
              <img
                src={supervisorImage}
                alt="Supervisor"
                className="team-member-image"
                style={{ maxWidth: '170px' }}
              />
              <p className="team-member-name"><span className='boldfont'>Supervisor</span> <br/>
              Dr. K.G. Gunawardana <br/>
              Senior Lecturer (UCSC)
              
              </p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src={coSupervisorImage}
                alt="Co-Supervisor"
                className="team-member-image"
                style={{ maxWidth: '170px' }}
              />
              <p className="team-member-name"> <span className='boldfont'>Co-Supervisor</span> <br/>
              Dr. D.K. Sandaruwan <br/>
              Senior Lecturer (UCSC) </p>
            </div>
            <div className="col-md-2 text-center">
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <img
                src={groupMember1Image}
                alt="Group Member 1"
                className="team-member-image"
                style={{ maxWidth: '150px' }}
              />
              <p className="team-member-name">Avishka Hettiarchchi <br/>
              19020341 <br/>
              2019/IS/034</p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src={groupMember2Image}
                alt="Group Member 2"
                className="team-member-image"
                style={{ maxWidth: '150px' }}
              />
              <p className="team-member-name">Bhanuji Meegoda <br/>
              19020465 <br/>
              2019/IS/046</p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src={groupMember3Image}
                alt="Group Member 3"
                className="team-member-image"
                style={{ maxWidth: '150px' }}
              />
              <p className="team-member-name">Thilina Peduruhewa <br/>
              19020554 <br/>
              2019/IS/055</p>
            </div>
          </div>
          <div className="row mt-5 mb-5">
            {/* <div className="col-12 mt-3 text-center">
              <img
                src={Logo2}
                alt="Your Logo"
                className="centered-logo"
                style={{ maxWidth: '400px' }}
              />
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TeamPage;
