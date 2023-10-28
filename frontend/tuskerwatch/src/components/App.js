import React from 'react';
import '../styles/App.css';
import UploadPage from './UploadPage';
import Home from './Home';
import { Routes,Route} from 'react-router-dom';

function App() {
  return (
    
      <div className="App">
        <Routes>
          <Route path="/upload" element={<UploadPage />} />
          <Route exact path="/" element={<Home />} />

        </Routes>
      </div>
    
  );
}

export default App;


