/*import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage"; 
import DonorSignUpPage from "./components/DonorSignUp"; 
import OrganizationSignUpPage from "./components/OrganizationSignUp"; // Replace with actual path if different

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/donor-signup" element={<DonorSignUpPage />} />
        <Route path="/organization-signup" element={<OrganizationSignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;*/

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjust path if Navbar is located elsewhere
import Home from './components/Home'; // Adjust path if Home is located elsewhere
import LoginPage from './components/LoginPage';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Place Navbar outside of specific routes */}
      <Routes>
        {/* Redirect root to /home */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Home route */}
        <Route path="/home" element={<Home />} />

        {/* Login route */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;

