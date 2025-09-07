import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          'https://klickks-app-1.onrender.com/api/auth/user',
          { withCredentials: true }
        );
        setEmail(res.data.email);
      } catch (err) {
        navigate('/login'); // redirect if not authenticated
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await axios.post(
        'https://klickks-app-1.onrender.com/api/auth/logout',
        {},
        { withCredentials: true }
      );
      navigate('/login');
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="dashboard">
      <h2>Welcome, {email}!</h2>
      <p>You are successfully logged in.</p>
      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
