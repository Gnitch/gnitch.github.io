import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dots } from 'react-preloaders2';
import React, { Fragment } from 'react'; 
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <React.Fragment>
    <Router>
      <div className="App">         
        <NavBar />
        <Home />
        <Projects />
        <About /> 
        <Dots color={'#b1b1b8'} background={'#131314'} />          
      </div>
    </Router>  
    </React.Fragment>    
      
  );
}

export default App;
