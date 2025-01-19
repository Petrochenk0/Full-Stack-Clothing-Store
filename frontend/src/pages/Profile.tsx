import React, { useState, useEffect } from 'react';
import './CSS/Profile.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface UserData {
  username: string;
  email: string;
}

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  // Get user data when component mounts 🔄
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await axios.get('http://localhost:8000/api/users/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error('Failed to fetch user data 😢', error);
        // If token is invalid, redirect to login
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('username');
    navigate('/');
    window.location.reload();
  };

  if (loading) {
    return (
      <div className="profile">
        <div className="profile-container">
          <h1>Loading... ⌛</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="profile">
      <div className="profile-container">
        <h1>My Profile 👤</h1>
        <div className="profile-info">
          <h2>Welcome back, {userData?.username}! </h2>
          <div className="profile-details">
            <div className="profile-section">
              <h3>Account Details 📋</h3>
              <p>
                <strong>Username:</strong> {userData?.username}
              </p>
              <p>
                <strong>Email:</strong> {userData?.email}
              </p>
            </div>
            <div className="profile-section">
              <h3>Order History 🛍️</h3>
              {/* Add order history here when implemented */}
              <p>No orders yet</p>
            </div>
          </div>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
