import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import Navbar from './navbar'
import Header from './Header'
import Cards from './Card'
import Footer from './Footer'
import ContactUs from './ContactUs';


ReactDOM.render(
  <>
    <Navbar />
    <Header />
    <Cards />
    <ContactUs/>
    <Footer />
    
  </>,
  document.getElementById('root')
  );

