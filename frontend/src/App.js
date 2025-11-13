import React, { useState } from 'react';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import './App.css';

function App() {
  const [showSignIn, setShowSignIn] = useState(true);

  return (
    <div className="App">
      {showSignIn ? (
        <SignIn onSwitchToSignUp={() => setShowSignIn(false)} />
      ) : (
        <SignUp onSwitchToSignIn={() => setShowSignIn(true)} />
      )}
    </div>
  );
}

export default App;
