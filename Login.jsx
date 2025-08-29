import React from 'react';
import drivanaImg from '../Image/Drivana.jpg';
import logoImg from '../Image/Logo.jpg';

const Login = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-yellow-600 text-white px-4">
      
      {/* Logo at top-left corner */}
      <img
        src={logoImg}
        alt="Logo"
        className="absolute top-4 left-4 w-16 h-16 object-contain"
      />

      {/* Image and Title side by side */}
      <div className="flex items-center mb-6 ml-4">
        <img src={drivanaImg} alt="Drivana" className="w-40 h-40 mr-6 object-contain" />
        <h1 className="text-4xl font-bold drop-shadow-md">DRIVANA</h1>
      </div>

      <div className="bg-purple-950 bg-opacity-80 p-6 rounded-xl w-full max-w-sm shadow-xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">DRIVANA</h2>
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email address"
          className="w-full mb-3 px-4 py-2 rounded-md bg-purple-900 text-white placeholder-purple-300 border border-purple-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 px-4 py-2 rounded-md bg-purple-900 text-white placeholder-purple-300 border border-purple-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        <button className="w-full py-2 rounded-md bg-gradient-to-r from-pink-500 to-yellow-400 font-bold hover:from-pink-600 hover:to-pink-500 transition mb-2">
          Log in
        </button>

        <div className="text-right text-sm mb-4">
          <a href="#" className="text-purple-300 hover:text-white transition">
            Forgot password?
          </a>
        </div>

        <button className="w-full py-2 rounded-md bg-purple-700 font-bold hover:bg-purple-600 transition">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Login;
