import React from 'react';
import {  Navbar } from './components';
import { BrowserRouter } from 'react-router-dom';
import Pages from './pages/Pages';

import './App.css';


const App = () => (
  <BrowserRouter>
    <div>
      <Navbar/>
      <Pages />
      
    </div>
  </BrowserRouter>
);

export default App;
