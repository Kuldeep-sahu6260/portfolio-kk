import React from 'react';

import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';

import Main from './container/Timeline/Main';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Main/>
    <Skills />
    <Testimonial />
    <Footer />
  </div>
);

export default App;