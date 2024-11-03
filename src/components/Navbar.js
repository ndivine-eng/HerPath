import React from 'react'; 
import { NavLink } from 'react-router-dom';

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <NavLink 
            to="/" 
            exact 
            className="text-white hover:text-gray-200" 
            style={({ isActive }) => isActive ? { color: 'yellow', fontWeight: 'bold' } : {}}
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
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className="text-white hover:text-gray-200" 
                style={({ isActive }) => isActive ? { color: 'yellow', fontWeight: 'bold' } : {}}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className="text-white hover:text-gray-200" 
                style={({ isActive }) => isActive ? { color: 'yellow', fontWeight: 'bold' } : {}}
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
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/register" 
                    className="text-white hover:text-gray-200" 
                    style={({ isActive }) => isActive ? { color: 'yellow', fontWeight: 'bold' } : {}}
                  >
                    Register
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink 
                    to="/profile" 
                    className="text-white hover:text-gray-200" 
                    style={({ isActive }) => isActive ? { color: 'yellow', fontWeight: 'bold' } : {}}
                  >
                    Profile
                  </NavLink>
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
