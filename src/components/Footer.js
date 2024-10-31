import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-700 to-blue-700 p-6 text-white text-center text-sm sm:text-base font-medium">
      <p>&copy; {new Date().getFullYear()} HerPath. Created by Nubuhoro Divine</p>
    </footer>
  );
}

export default Footer;
