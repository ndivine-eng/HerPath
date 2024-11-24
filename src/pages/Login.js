import React, { useState } from 'react'; 
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../firebase'; 
import { useNavigate } from 'react-router-dom'; 

function Login() {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState(''); 
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user; // Get the user object after login
      alert('Login successful!');
      // Navigate to dashboard after login
      navigate('/dashboard', { state: { userName: user.displayName } }); // Pass user's name as state
    } catch (err) {
      setError(err.message); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-teal-500 to-blue-800 text-white p-6">
      <h1 className="text-4xl font-extrabold mb-6">Login</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {error && <div className="text-red-500 mb-4">{error}</div>}
        
        <div className="mb-4">
          <label className="block text-teal-600 font-semibold mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded py-2 px-3 text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-teal-600 font-semibold mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded py-2 px-3 text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
            required
          />
        </div>

        <button
          type="submit"
          className={`bg-teal-600 text-white px-4 py-2 rounded-full font-bold hover:bg-teal-500 transition duration-300 w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <div className="mt-4 text-center">
          <a 
            href="/forgot-password" 
            className="text-teal-600 hover:underline"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
