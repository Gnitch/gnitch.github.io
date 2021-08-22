import { Dots } from 'react-preloaders2';
import React from 'react'; 
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className="App">         
        <NavBar />
        <Home />
        <Projects />
        <About /> 
        <Dots color={'#b1b1b8'} time={1800} background={'#131314'} />          
      </div> 
    </React.Fragment>    
      
  );
}

export default App;
