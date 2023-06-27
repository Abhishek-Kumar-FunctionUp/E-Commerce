import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../redux/actions';
import { registerUser } from '../redux/actions';
import './login.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // New state for checkbox

  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const registeredUsers = useSelector((state) => state.users.registeredUsers); // Access registeredUsers from state

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    if (username === '') {
      setUsernameError('Username is required');
      return;
    }

    if (password === '') {
      setPasswordError('Password is required');
      return;
    }

    // Check if the username and password match the registered user data
    // For simplicity, we'll assume the login is successful if username is 'registeruser' and password is 'password'
    const matchedUser = registeredUsers.find((user) => user.username === username && user.password === password);
    if (matchedUser) {
      dispatch(loginSuccess());
      navigate('/');

      // Set cookie if rememberMe is checked
      if (rememberMe) {
        document.cookie = `username=${matchedUser.username}; max-age=3600`; // Set username cookie for 1 hour
        document.cookie = `password=${matchedUser.password}; max-age=3600`; // Set password cookie for 1 hour
      }
    } else {
        
      // Display an error message for incorrect credentials
      setPasswordError('Invalid username or password');
    }
  };

  return (
    <div className="container">
      <h2 className="center heading">Login</h2>
      <form className="center form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} />
          <br />
          <span className="error">{usernameError}</span>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
          <br />
          <span className="error">{passwordError}</span>
        </div>
        <div>
          <label htmlFor="rememberMe">Remember Me:</label>
          <input type="checkbox" id="rememberMe" checked={rememberMe} onChange={handleRememberMeChange} />
        </div>
        <button type="submit" className="submit-button">
          Login
        </button>
        <Link to="/register" className="register-link">
          Not registered??
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
