/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(`${backendUrl}/api/user/register`, {
          name,
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(`${backendUrl}/api/user/login`, {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex justify-center items-center px-4">
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:max-w-md bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center space-y-5 transition-all duration-500"
      >
        <div className="text-center mb-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-1 transition-all duration-300">
            {currentState}
          </h2>
          <p className="text-sm text-gray-500">
            {currentState === 'Login' ? 'Welcome back 👋' : 'Join us today 🚀'}
          </p>
        </div>

        {currentState === 'Sign Up' && (
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-200"
            placeholder="Full Name"
            required
          />
        )}

        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-200"
          placeholder="Email Address"
          required
        />

        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
          placeholder="Password"
          required
        />

        <div className="w-full flex justify-between text-xs text-gray-600 mt-[-8px]">
          <p className="cursor-pointer hover:underline">Forgot your password?</p>
          {currentState === 'Login' ? (
            <p
              onClick={() => setCurrentState('Sign Up')}
              className="cursor-pointer hover:text-blue-500 transition-all"
            >
              Create account
            </p>
          ) : (
            <p
              onClick={() => setCurrentState('Login')}
              className="cursor-pointer hover:text-purple-500 transition-all"
            >
              Login Here
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-2 rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
        >
          {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default Login;
