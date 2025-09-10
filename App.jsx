// src/App.jsx
import { useState } from "react";
import "./App.css";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import Home from "./Component/Home";

function App() {
  const [showSignup, setShowSignup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // If logged in → show Home
  if (isLoggedIn) {
    return <Home onLogout={() => setIsLoggedIn(false)} />;
  }

  return (
    <>
      {showSignup ? (
        <Signup
          onBackToLogin={() => setShowSignup(false)}
          onSignupSuccess={() => setIsLoggedIn(true)}
        />
      ) : (
        <Login
          onSignupClick={() => setShowSignup(true)}
          onLoginSuccess={() => setIsLoggedIn(true)}
        />
      )}
    </>
  );
}

export default App;
