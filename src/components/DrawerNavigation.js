// src/components/DrawerNavigation.js
import React, { useState } from 'react'; // Only one import statement for React
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function DrawerNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleDrawer} className="p-2 text-white bg-blue-600 rounded">
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black opacity-50" onClick={toggleDrawer}></div>
          <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50">
            <ul className="p-4">
              <li><Link to="/" onClick={toggleDrawer}>Home</Link></li>
              <li><Link to="/dashboard" onClick={toggleDrawer}>Dashboard</Link></li>
              <li><Link to="/about" onClick={toggleDrawer}>About</Link></li>
              <li><Link to="/contact" onClick={toggleDrawer}>Contact</Link></li>
              <li><Link to="/login" onClick={toggleDrawer}>Login</Link></li>
              <li><Link to="/register" onClick={toggleDrawer}>Register</Link></li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default DrawerNavigation;
