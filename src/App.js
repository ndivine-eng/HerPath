import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import ForgotPassword from './pages/ForgotPassword';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const PrivateRoute = ({ element }) => {
    return user ? element : <Navigate to="/login" />;
  };

  return (
    <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar user={user} onLogout={handleLogout} />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<PrivateRoute element={<UserProfile user={user} onLogout={handleLogout} />} />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
