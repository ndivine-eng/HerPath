import React from 'react'; 
import { NavLink } from 'react-router-dom';

const Navbar = ({ user, onLogout }) => {
  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      onLogout();
    }
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <NavLink 
            to="/" 
            exact 
            className="text-white hover:text-gray-200" 
            style={({ isActive }) => isActive ? { color: 'yellow', fontWeight: 'bold' } : {}}
            aria-label="Go to homepage"
          >
            HerPath
          </NavLink>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <NavLink 
                to="/" 
                exact 
                className="text-white hover:text-gray-200" 
                style={({ isActive }) => isActive ? { color: 'yellow', fontWeight: 'bold' } : {}}
                aria-label="Go to Home"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className="text-white hover:text-gray-200" 
                style={({ isActive }) => isActive ? { color: 'yellow', fontWeight: 'bold' } : {}}
                aria-label="Learn more about us"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className="text-white hover:text-gray-200" 
                style={({ isActive }) => isActive ? { color: 'yellow', fontWeight: 'bold' } : {}}
                aria-label="Contact us"
              >
                Contact
              </NavLink>
            </li>
            {!user ? (
              <>
                <li>
                  <NavLink 
                    to="/login" 
                    className="text-white hover:text-gray-200" 
                    style={({ isActive }) => isActive ? { color: 'yellow', fontWeight: 'bold' } : {}}
                    aria-label="Login to your account"
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/register" 
                    className="text-white hover:text-gray-200" 
                    style={({ isActive }) => isActive ? { color: 'yellow', fontWeight: 'bold' } : {}}
                    aria-label="Register a new account"
                  >
                    Register
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink 
                    to="/dashboard" 
                    className="text-white hover:text-gray-200" 
                    style={({ isActive }) => isActive ? { color: 'yellow', fontWeight: 'bold' } : {}}
                    aria-label="Go to your dashboard"
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/profile" 
                    className="text-white hover:text-gray-200" 
                    style={({ isActive }) => isActive ? { color: 'yellow', fontWeight: 'bold' } : {}}
                    aria-label="Go to your profile"
                  >
                    Profile
                  </NavLink>
                </li>
                <li>
                  <button onClick={handleLogout} className="text-white hover:text-gray-200" aria-label="Logout from your account">
                    Logout
                  </button>
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
