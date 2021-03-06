import React from 'react';
import  { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Home';
import Recipe from './Recipe';
import Searched from './Searched';
import About from './About.jsx';
import Contact from './Contact';


function Pages() {
  const location = useLocation()
  return (
    <Routes Location={location} key={location.pathname}>
        <Route exact path='/about/' element={<About />} />
        <Route exact path='/contact/' element={<Contact />} />
        <Route exact path='/' element={<Home />} />
        <Route exact path='/recipe/:name' element={<Recipe />}/>
        <Route exact path='/searched/:search' element={<Searched />}/>
    </Routes>
  )
}

export default Pages
