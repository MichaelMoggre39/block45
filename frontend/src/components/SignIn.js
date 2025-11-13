import React, { useState } from 'react';
import axios from 'axios';
import './SignIn.css';

const SignIn = ({ onSwitchToSignUp }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    setUser(null);

    try {
      const response = await axios.post('http://localhost:5000/api/auth/signin', formData);
      const userData = response.data.user;
      setUser(userData);
      
      // Display welcome message based on role
      if (userData.role === 'admin') {
        setMessage(`Welcome Admin! (${userData.email})`);
      } else {
        setMessage(`Welcome Customer! (${userData.email})`);
      }
      
      setFormData({ email: '', password: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="btn-primary">Sign In</button>
        </form>

        {message && (
          <div className="success-message">
            <p>{message}</p>
            {user && (
              <p className="role-badge">
                Role: <span className={user.role}>{user.role.toUpperCase()}</span>
              </p>
            )}
          </div>
        )}
        {error && <p className="error-message">{error}</p>}

        <p className="switch-auth">
          Don't have an account?{' '}
          <span onClick={onSwitchToSignUp} className="link">Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
