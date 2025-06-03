/* eslint-disable react/prop-types */
import axios from 'axios';
import { useState } from 'react';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // <-- useNavigate hook

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(backendUrl + '/api/user/admin', { email, password });
      if (response.data.success) {
        setToken(response.data.token);
        toast.success('Login successful!');
        navigate('/admin/dashboard'); // <-- Navigate to dashboard on success
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-blue-50 px-4">
      <div className="bg-white shadow-md rounded-xl px-8 py-8 max-w-md w-full sm:w-[400px]">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-600 select-none">Admin Panel</h1>
        <form onSubmit={onSubmitHandler} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-md shadow-md transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
