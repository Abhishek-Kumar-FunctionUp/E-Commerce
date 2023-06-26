import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/actions';
import './Register.css';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const[birthdateError,setBirthdateError]=useState("")
    const[emailError,setEmailError]=useState('')
    const[confirmPasswordError,setConfirmPasswordError]=useState('')
 const navigate
  const dispatch = useDispatch();

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    const usernameRegex = /^\S*$/; // No whitespace allowed
    if (!usernameRegex.test(value)) {
      setUsernameError('Username is not valid');
    } else {
      setUsernameError('');
    }
  };
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError('Email is not valid');
    } else {
      setEmailError('');
    }
  };

  const handleBirthdateChange = (e) => {
    const value = e.target.value;
    setBirthdate(value);
    const birthdateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!birthdateRegex.test(value)) {
      setBirthdateError('Birthdate is not valid');
    } else {
      setBirthdateError('');
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/;
    if (!passwordRegex.test(value)) {
      setPasswordError('Password must be 6-20 characters and include at least one uppercase letter, one lowercase letter, and one digit');
    } else {
      setPasswordError('');
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    // Validation logic
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
        setConfirmPasswordError('Passwords do not match');
        return;
      }
    // Validation logic
    if (username === '') {
      setUsernameError('Username is required');
      return;
    }

    if (email === '') {
      setEmailError('Email is required');
      return;
    }

    if (birthdate === '') {
      setBirthdateError('Birthdate is required');
      return;
    }

    if (password === '') {
      setPasswordError('Password is required');
      return;
    }

    if (confirmPassword === '') {
      setConfirmPasswordError('Confirm Password is required');
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      return;
    }

    // Create user data object
    const userData = {
      username,
      email,
      birthdate,
      password,
    };

    // Dispatch the registerUser action
    dispatch(registerUser(userData));

    // Reset form fields
    setUsername('');
    setEmail('');
    setBirthdate('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="container">
      <h2 className="center">Register</h2>
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
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          <br />
          <span className="error">{emailError}</span>
        </div>
        <div>
          <label htmlFor="birthdate">Birthdate:</label>
          <input
            type="date"
            id="birthdate"
            value={birthdate}
            onChange={handleBirthdateChange}
          />
          <br />
          <span className="error">{birthdateError}</span>
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
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <br />
          <span className="error">{confirmPasswordError}</span>
        </div>
        <button type="submit" className="submit-button">
          Register
        </button>
        <Link to="/" className="login-link">
          Already registered? Login here
        </Link>
      </form>
    </div>
  );
};

export default RegisterPage;
