import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import NavbarLanding from './components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';



function App() {
  return (
    <Router>
    <NavbarLanding/> 
   

    </Router>
  );
}

export default App;
