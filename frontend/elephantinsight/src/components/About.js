import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/UploadPage.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Logo1 from '../images/logo1.png';
import loadi from '../images/test.gif';

function AboutPage() {
  
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
            <div className="col-md-12 px-5 mt-3">
            {/* <img
                src={Logo1}
                alt="Your Logo"
                style={{ maxWidth: '450px' }}
              /> */}
              <h4 className="lightfont mb-4">About Research</h4>

              <ul className="lightfont">

                <li><span className='boldfont'>Research Title:  </span> <br/>

                Reidentifying Asian Elephants Based on a Combination of Physical Traits Using Convolutional Neural Networks</li>

                  <li className='mt-5 !important'> <span className='boldfont'>Research Abstract:  </span> <br/>

                  Asian elephants (Elephas maximus) are one of the largest land mammals on earth. Asian elephants face many challenges, such as habitat loss, fragmentation, poaching, and conflicts brought on by their contact with human settlements. A critical first step in understanding elephant behavior and fostering conservation efforts is the individual identification of elephants within a population. Zoologists consider using the ear patterns of Asian elephants as a prominent feature for the individual identification process. According to Vidya et al., along with ear patterns, many other features of elephants can be considered for the individual identification of elephants, including back characteristics and tail. With vast populations, keeping track of individual elephant identities becomes challenging. Automation of this process is therefore quite helpful. Few research has been conducted in this area and has been successful in identifying individual elephants using computer vision techniques. De Silva et al. applied various convolutional neural networks and evaluated the performance of each model and were able to achieve the best top-1 accuracy of 89.02% with Xceptionnet architecture in Asian elephant individual identification based on the elephant ear dataset. A significant challenge inherent to this approach lies in the complexity of capturing detailed features of elephant ears within their natural wildlife habitats, resulting in limited availability of data for the purpose of identification. Given that wildlife photography is a hectic process and that the photographs are often cluttered and noisy, the identification process is slowed down by the need to focus on a single key characteristic. This work addresses this bottleneck by considering multiple body traits of Asian elephants. This work evaluates the performance of Convolutional Neural Networks (VGG16, ResNet50, InceptionV3, Xception, and Alexnet) on Elephant face, ear, spine, and tail characteristics of known elephants for individual identification. Combinations of body traits (face, Ear features, Spine features, and tail features) will then be evaluated to assess the accuracy of the identification process using CNN and identify the most suitable body trait combination for the identification process. Finally, this work presents a fully automated Convolutional neural network pipeline that can be used to re-identify Asian elephants considering the best combination of elephant features. This study aims to enhance the practicality of identifying Asian elephants through photographic observations within their natural wildlife habitats. </li>

                  <li className='mt-5 !important'><span className='boldfont'>Rsearch Group :  </span> <br/>

                  ElephIDynamics (IS Research Group 6)</li>

                  <li className='mt-5 mb-5 !important'><span className='boldfont'>Description and Objectives: </span>  <br/>

                  Our research group is dedicated to the cause of wildlife conservation and the mitigation of human-elephant conflict in Sri Lanka. Our primary focus is on leveraging Machine Learning techniques for elephant identification using photographic images.We firmly believe that accurate identification of elephants is a pivotal factor in comprehending their movements and population dynamics. This understanding, in turn, is essential for devising effective conservation strategies aimed at reducing human-elephant conflicts.</li>


              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
