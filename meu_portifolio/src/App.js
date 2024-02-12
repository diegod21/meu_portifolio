import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WebRide from './Projetos/webRide/index';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import diegoImg from './images/Diego.jpg';
import './App.css';
import Home from './components';

function App() {
  return (

    <Router>
        <Routes>
          <Route path="/webRide" element={<WebRide />} />
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App;
