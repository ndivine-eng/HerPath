// src/pages/Register.js
import React from 'react';

function Register() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-blue-700 text-white">
      <h1 className="text-4xl font-extrabold mb-4">Register</h1>
      <form className="bg-white p-5 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-blue-500 font-bold mb-2" htmlFor="username">Username</label>
          <input type="text" id="username" className="border rounded py-2 px-3 text-gray-700 w-full" required />
        </div>
        <div className="mb-4">
          <label className="block text-blue-500 font-bold mb-2" htmlFor="email">Email</label>
          <input type="email" id="email" className="border rounded py-2 px-3 text-gray-700 w-full" required />
        </div>
        <div className="mb-4">
          <label className="block text-blue-500 font-bold mb-2" htmlFor="password">Password</label>
          <input type="password" id="password" className="border rounded py-2 px-3 text-gray-700 w-full" required />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded font-bold hover:bg-blue-700">Register</button>
      </form>
    </div>
  );
}

export default Register;
