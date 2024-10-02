'use client'
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../components/home';

const HomePage: React.FC = () => {
  return (
      <div className="container">
        <Router>
            <Home />
        </Router>
      </div>
  );
};

export default HomePage;