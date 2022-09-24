// import dependencies and components
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

import "bootstrap/dist/css/bootstrap.min.css"
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <HashRouter>

        <Header />
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/about" replace />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App
