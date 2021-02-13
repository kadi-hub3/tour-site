import React, { useState, useEffect } from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";
import './index.scss'
import About from './pages/About'
import Home from './pages/Home'
import Services from './pages/Services'
import Nav from './components/Nav'


function App() {


  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
      </Switch>
    </>
  )
}

export default App;
