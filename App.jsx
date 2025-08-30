// src/App.jsx
import { useState } from 'react';
import './App.css';
import Login from './Component/Login';
import Signup from './Component/Signup';

function App() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      {showSignup ? (
        <Signup onBackToLogin={() => setShowSignup(false)} />
      ) : (
        <Login onSignupClick={() => setShowSignup(true)} />
      )}
    </>
  );
}

export default App;
