import React from 'react';
import ReactDOM from 'react-dom';

import styles from './css/main.scss';

import Navbar from './components/navbar';
import Home from './components/home';
import Footer from './components/footer';

ReactDOM.render(
  <div>
    <Navbar />
    <Home />
    <Footer />
  </div>,
  document.getElementById('root')
);