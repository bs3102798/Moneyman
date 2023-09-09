import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Header';
import About from './components/Dashboard';
import Home from './components/Home'
import Portfolio from './components/DataForm';
import './App.css'

import Contact from './components/Login';


const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<About />} />
        {/* <Route path="/dataform" element={<Portfolio />} /> */}

        <Route path="/login" element={<Contact />} />
      </Routes>
    </Router>
  );
};
// const Home = () => {
//   return <div class="home">Welcome to the homepage!</div>;
// };




export default App;