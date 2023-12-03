import React from 'react';
import UploadPage from './UploadPage';
import Home from './Home';
import Results from './Results';
import About from  './About'
import Team from './Team'
import { Routes,Route} from 'react-router-dom';

function App() {
  return (
    
      <div className="App">
        <Routes>
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/results" element={<Results />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/" element={<Home />} />

        </Routes>
      </div>
    
  );
}

export default App;


