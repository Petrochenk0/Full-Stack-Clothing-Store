import React, { useState } from 'react';
import './CSS/SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
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

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match! 🤦‍♂️');
      return;
    }

    if (!formData.username || !formData.email || !formData.password) {
      setError('Bro, fill all field 📝');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8000/api/users/register',
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('username', response.data.username);

      navigate('/');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error during registration');
    }
  };

  return (
    <div className="login-signup">
      <div className="container">
        <h1>Sign up</h1>
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
              type="email"
              placeholder="Email: "
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password: "
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Confirm Password: "
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Continue</button>
          <p className="login">
            Already have an account?{' '}
            <Link to="/login" style={{ textDecoration: 'none', color: '#3b3a3a' }}>
              <span>Login here</span>
            </Link>
          </p>
          <div className="agree">
            <input type="checkbox" id="terms" required />
            <p>By creating an account, I agree to the Terms of Service and Privacy Policy.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
