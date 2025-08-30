// src/Component/Signup.jsx
import React from 'react';
import logoImg from '../Image/Logo.jpg';

const Signup = ({ onBackToLogin }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white-900 via-white-800 to-white-600 text-white px-4">
      <img
        src={logoImg}
        alt="Logo"
        className="absolute top-4 left-4 w-16 h-16 object-contain"
      />

      <div className="bg-purple-950 bg-opacity-80 p-6 rounded-xl w-full max-w-sm shadow-xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">Create an account</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-3 px-4 py-2 rounded-md bg-purple-900 text-white placeholder-purple-300 border border-purple-700"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full mb-3 px-4 py-2 rounded-md bg-purple-900 text-white placeholder-purple-300 border border-purple-700"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 px-4 py-2 rounded-md bg-purple-900 text-white placeholder-purple-300 border border-purple-700"
        />
        <input
          type="password"
          placeholder="Create Password"
          className="w-full mb-3 px-4 py-2 rounded-md bg-purple-900 text-white placeholder-purple-300 border border-purple-700"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full mb-4 px-4 py-2 rounded-md bg-purple-900 text-white placeholder-purple-300 border border-purple-700"
        />

        <button className="w-full py-2 rounded-md bg-gradient-to-r from-pink-500 to-yellow-400 font-bold hover:from-pink-600 hover:to-pink-500 transition mb-2">
          Sign Up
        </button>

        <button
          onClick={onBackToLogin}
          className="w-full py-2 rounded-md bg-purple-700 font-bold hover:bg-purple-600 transition"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default Signup;
