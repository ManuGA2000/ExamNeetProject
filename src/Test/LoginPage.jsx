// src/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle, signUpWithEmailPassword, signInWithEmailPassword } from './FireBase';
import './Login.css';

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (isSignUp) {
        await signUpWithEmailPassword(name, email, password);
      } else {
        await signInWithEmailPassword(email, password);
      }
      navigate('/NextPage');  // Ensure path is lowercase and matches your Routes
    } catch (error) {
      setError('Password is incorrect.');  
      console.error(isSignUp ? "Sign up error:" : "Sign in error:", error);
    }
  };

  // const handleGoogleSignIn = async () => {
  //   try {
  //     const user = await signInWithGoogle();
  //     console.log("Google Sign-In successful, user:", user);
  //     if (user) {
  //       navigate('/NextPage');  // Ensure path is lowercase and matches your Routes
  //     }
  //   } catch (error) {
  //     setError('Google sign-in error.');  
  //     console.error("Google sign-in error:", error);
  //   }
  // };
  

  const handleGoogleSignIn = async () => {
    try {
      const user = await signInWithGoogle();
      if (user) {
        navigate('/NextPage');  
      }
    } catch (error) {
      setError('Google sign-in error.');  
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <div className="login-container">
      <h1>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
      <form onSubmit={handleFormSubmit} className="login-form">
        {isSignUp && (
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
      </form>
      <div className="separator">or</div>
      <button onClick={handleGoogleSignIn} className="google-login-button">
        <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" />
        {isSignUp ? 'Sign up with Google' : 'Sign in with Google'}
      </button>
      <div>
        <button onClick={() => setIsSignUp(!isSignUp)} className="toggle-button">
          {isSignUp ? 'Already have an account? Sign In' : 'Don’t have an account? Sign Up'}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
