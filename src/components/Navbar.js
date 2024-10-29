import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto">
        <Link to="/" className="text-white mr-4">Home</Link>
        <Link to="/dashboard" className="text-white mr-4">Dashboard</Link>
        <Link to="/about" className="text-white mr-4">About</Link>
        <Link to="/contact" className="text-white mr-4">Contact</Link>
        <Link to="/register" className="text-white mr-4">Register</Link>
        <Link to="/login" className="text-white">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
