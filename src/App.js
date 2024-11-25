import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import ProfileUpdate from './pages/ProfileUpdate';
import Dashboard from './pages/Dashboard';
import Mentorship from './pages/Mentorship';
import MentorDetails from './pages/MentorDetails';
import Quiz from './pages/Quiz';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  // Protected Route Component
  const ProtectedRoute = ({ element }) => {
    return user ? element : <Navigate to="/login" />;
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar user={user} onLogout={handleLogout} />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/profile" element={<UserProfile user={user} onLogout={handleLogout} />} />
            <Route path="/profile-update" element={<ProfileUpdate />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/mentorship" element={<Mentorship />} />
            <Route path="/mentor-details" element={<MentorDetails />} />
            <Route path="/quiz" element={<Quiz />} />
            
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
