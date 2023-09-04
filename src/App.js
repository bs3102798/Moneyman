import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/Dashboard';
import Portfolio from './components/DataForm';

import Contact from './components/Login';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<About />} />
        <Route path="/dataform" element={<Portfolio />} />

        <Route path="/login" element={<Contact />} />
      </Routes>
    </Router>
  );
};
const Home = () => {
  return <div>Welcome to the homepage!</div>;
};




export default App;