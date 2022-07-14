import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <Router>
      <>
          <Header/>
          <HeroSection/>
          <Testimonials/>
          <Gallery/>
          <Footer/>
      </>
    </Router>
  );
}

export default App;