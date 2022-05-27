import React from 'react';
import  { Route, Routes, useLocation, Redirect } from 'react-router-dom'
import Home from './Home';
import Recipe from './Recipe';
import Searched from './Searched';


function Pages() {
  const location = useLocation()
  return (
    <Routes Location={location} key={location.pathname}>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/MunchiesRecipes' element={<Home />} />
        <Route exact path='/recipe/:name' element={<Recipe />}/>
        <Route exact path='/searched/:search' element={<Searched />} />
        <Route exact path="*">
          <Redirect to="/" />
        </Route>
    </Routes>
  )
}

export default Pages
