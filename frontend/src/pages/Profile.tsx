import React, { useState, useEffect } from 'react';
import './CSS/Profile.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface UserData {
  username: string;
  email: string;
}

interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

interface Order {
  id: number;
  items: OrderItem[];
  total: number;
  createdAt: string;
}

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState<Order[]>([]);

  // Get user data when component mounts 🔄
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const [userResponse, ordersResponse] = await Promise.all([
          axios.get('http://localhost:8000/api/users/profile', {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get('http://localhost:8000/api/users/order-history', {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        setUserData(userResponse.data);
        setOrders(ordersResponse.data);
      } catch (error) {
        console.error('Failed to fetch data 😢', error);
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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
              {orders.length === 0 ? (
                <p>No orders yet</p>
              ) : (
                orders.map((order) => (
                  <div key={order.id} className="order-item">
                    <p className="order-date">
                      Order date: {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                    {order.items.map((item, index) => (
                      <div key={index} className="order-product">
                        <p>
                          {item.name} x{item.quantity}
                        </p>
                        <p>${item.price}</p>
                      </div>
                    ))}
                    <p className="order-total">Total: ${order.total}</p>
                    <hr />
                  </div>
                ))
              )}
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
