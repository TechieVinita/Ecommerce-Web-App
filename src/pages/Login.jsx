import React, { useState } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Reset password error
    setPasswordError('');

    // Validate password
    const isValid = validatePassword(password);
    if (!isValid) {
      setPasswordError('Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character.');
      return;
    }

    // Alert "Login successful" if valid
    alert('Login Successful');

    // Perform login logic here (add your login logic)
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const validatePassword = (password) => {
    // Password must be at least 8 characters long, contain at least one uppercase letter,
    // one lowercase letter, one number, and one special character
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-input">
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="toggle-password" onClick={handlePasswordVisibility}>
              <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
            </span>
          </div>
          {passwordError && <small className="error-text">{passwordError}</small>}
        </div>
        <button type="submit" className="btn-login">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
