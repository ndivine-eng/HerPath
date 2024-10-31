import React, { useEffect, useState } from 'react';

const UserProfile = ({ onLogout }) => {
  const [photo, setPhoto] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setPhoto(storedUser.photo || '');
      setName(storedUser.name || '');
      setEmail(storedUser.email || '');
    }
  }, []);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPhoto(reader.result); // Set the photo state to the uploaded file's URL
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleUpdateProfile = () => {
    const updatedUser = {
      photo,
      name,
      email,
    };
    localStorage.setItem('user', JSON.stringify(updatedUser)); // Save user data in local storage
    console.log('Profile updated:', updatedUser);
  };

  return (
    <div className="container mx-auto mt-10 p-5 border rounded shadow-lg">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <div className="flex items-center mb-5">
        {photo ? (
          <img
            src={photo}
            alt="User Profile"
            className="w-24 h-24 rounded-full border-2 border-gray-300 mr-5"
          />
        ) : (
          <div className="w-24 h-24 rounded-full border-2 border-gray-300 mr-5 flex items-center justify-center">
            <span className="text-gray-400">No Image</span>
          </div>
        )}
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="mb-2"
          />
        </div>
      </div>
      
      <div className="mb-5">
        <label className="block mb-1 font-semibold">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded p-2 w-full"
          placeholder="Enter your name"
        />
      </div>
      
      <div className="mb-5">
        <label className="block mb-1 font-semibold">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded p-2 w-full"
          placeholder="Enter your email"
        />
      </div>

      <button
        onClick={handleUpdateProfile}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Update Profile
      </button>

      <button
        onClick={onLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition ml-4"
      >
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
