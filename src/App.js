import React from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";
import './index.scss'
import About from './pages/About'
import Home from './pages/Home'
import Services from './pages/Services'
import Error from './pages/Error'
import Nav from './components/Nav'


function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route component={Error} />
      </Switch>
    </>
  )
}

export default App;
