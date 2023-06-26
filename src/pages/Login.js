import React, { useState } from 'react';
import { Link, useNavigate,  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions';
import './login.css';

const LoginPage = () => {
  const dispatch = useDispatch();
//   const history = useHistory();
  const navigate=useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
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

    // Dispatch the login action
    dispatch(login(username, password));

    // Reset form fields
    setUsername('');
    setPassword('');

    // Navigate to the homepage if login is successful
    // history.push('/home');
    navigate('/home')
  };

  return (
    <div className="container">
      <h2 className="center heading">Login</h2>
      <form className="center form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
          <br />
          <span className="error">{usernameError}</span>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <br />
          <span className="error">{passwordError}</span>
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
