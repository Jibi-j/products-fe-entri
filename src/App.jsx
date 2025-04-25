import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

import Home from './components/Home';
import Products from './components/Products';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Footer from './components/Footer'

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) setIsAuthenticated(true);
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem('authToken', token);
    if (token) setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center gap-2" to="/"  style={{ color: 'yellow' }}>
            Trends
          </Link>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto d-flex flex-row gap-3">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                {!isAuthenticated ? (
                  <Link className="nav-link" to="/login">Login</Link>
                ) : (
                  <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>
                    Logout
                  </button>
                )}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Sign Up</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>

      <div className="container flex-grow-1 mt-4">
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login onLogin={handleLogin} />} />
  <Route
    path="/products"
    element={
      <ProtectedRoute isAuthenticated={isAuthenticated}>
        <Products />
      </ProtectedRoute>
    }
  />
  <Route path="/signup" element={<SignUp />} />
   
</Routes>
     
      </div>
      <Footer />
    </Router>
  );

  function ProtectedRoute({ isAuthenticated, children }) {
    return isAuthenticated ? children : <Navigate to="/login" />;
  }
};

export default App;