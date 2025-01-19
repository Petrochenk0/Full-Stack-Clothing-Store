import React, { useState } from 'react';
import './CSS/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Check for empty fields
    if (!formData.username || !formData.password) {
      setError('Bro, fill all field 📝');
      return;
    }

    try {
      // Send login request to backend
      const response = await axios.post(
        'http://localhost:8000/api/users/login',
        {
          username: formData.username,
          password: formData.password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      // Store user data and redirect to home page
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('username', response.data.username);

      navigate('/');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Invalid credentials');
    }
  };

  return (
    <div className="login-signup">
      <div className="container">
        <h1>Login</h1>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="fields">
            <input
              type="text"
              placeholder="Username: "
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password: "
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Continue</button>
        </form>
        <p className="login">
          Don't have an account?
          <Link to="/registry" style={{ textDecoration: 'none', color: '#3b3a3a' }}>
            <span>Sign up here</span>
          </Link>
        </p>
        <div className="agree">
          <input type="checkbox" name="keepLoggedIn" />
          <p>Keep me logged in</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
