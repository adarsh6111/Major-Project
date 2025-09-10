// src/Component/Home.jsx
import React from "react";
import { Car, User, LogOut, Search, Star } from "lucide-react";



const Home = ({ onLogout }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 bg-black bg-opacity-60 shadow-lg sticky top-0 z-50">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Car className="text-yellow-400" /> Drivana
        </h1>
        <nav className="flex gap-6 text-lg">
          <a href="#" className="hover:text-yellow-400 transition">Home</a>
          <a href="#" className="hover:text-yellow-400 transition">Compare</a>
          <a href="#" className="hover:text-yellow-400 transition">Budget Finder</a>
          <a href="#" className="hover:text-yellow-400 transition">Features</a>
        </nav>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300 transition flex items-center gap-2">
            <User size={18} /> Profile
          </button>
          <button
            onClick={onLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition flex items-center gap-2"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Find & Compare Your Dream Car 🚗
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Compare cars side by side, filter by budget, and get AI-based recommendations
          based on the features you love.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-yellow-400 text-black rounded-lg font-bold hover:bg-yellow-300 transition flex items-center gap-2">
            <Search size={18} /> Compare Cars
          </button>
          <button className="px-6 py-3 bg-pink-500 rounded-lg font-bold hover:bg-pink-600 transition flex items-center gap-2">
            <Star size={18} /> Get Recommendations
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 py-16">
        <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-3">🔍 Car Comparison</h3>
          <p className="text-gray-300">
            Select two cars and instantly compare specifications, features, and pricing.
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-3">💰 Budget Finder</h3>
          <p className="text-gray-300">
            Enter your budget and discover the best cars available in your price range.
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-3">⚡ Smart Recommendations</h3>
          <p className="text-gray-300">
            Get personalized suggestions based on the features you want in your car.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black bg-opacity-70 text-center py-6 mt-10">
        <p className="text-gray-400">
          © 2025 CarCompare. Built with ❤️ for B.Tech Major Project.
        </p>
      </footer>
    </div>
  );
};

export default Home;
