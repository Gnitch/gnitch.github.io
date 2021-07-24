import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Particles from 'react-particles-js';
import React, { Fragment } from 'react'; 
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App"> 
          <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
        </Switch>        
        <Particles
                params={{
                particles: {
                    number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 1000,
                    }
                    },
                    move : {
                        speed: 1.5
                    },
                },
                }}
            />         
      </div>
    </Router>    
  );
}

export default App;
