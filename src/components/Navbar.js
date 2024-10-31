import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link to="/">HerPath</Link>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-200">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gray-200">About</Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-200">Contact</Link>
            </li>
            {!user ? (
              <>
                <li>
                  <Link to="/login" className="text-white hover:text-gray-200">Login</Link>
                </li>
                <li>
                  <Link to="/register" className="text-white hover:text-gray-200">Register</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/profile" className="text-white hover:text-gray-200">Profile</Link>
                </li>
                <li>
                  <button onClick={onLogout} className="text-white hover:text-gray-200">Logout</button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
