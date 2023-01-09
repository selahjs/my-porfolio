import React from 'react';

import {About,Service, Footer, Header, Testimonials, Work} from './container';
import { Navbar } from './components';
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <About/>
      <Service/>
      <Work/>
      {/* <Skills/> */}
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App;