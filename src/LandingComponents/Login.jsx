import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';



const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('https://backend-2jzz.onrender.com/api/auth/login', formData);
      if (data.token) {
        localStorage.setItem('token', data.token);
        toast.success('Login Successfull!!') 
        navigate('/dashboard');
      } else {
        throw new Error('Token not found in response'); // To catch if token is missing
      }
  
      // localStorage.setItem('profile', JSON.stringify(data));
      // localStorage.setItem('token', response.data.token);
      
    } catch (err) {
      setError(err.response.data.message || 'Login Failed Invalid Credentials');
      toast.error('Login Failed')
    }
  };

  return (
   

<div className="login-page"> {/* Changed from <body> to <div> */}
<div className="login-container">
  <h2>Welcome Back!</h2>
  <p>Please log in to your account to continue.</p>
  <form onSubmit={handleSubmit}>
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      required
    />
    <input
      type="password"
      name="password"
      placeholder="Password"
      value={formData.password}
      onChange={handleChange}
      required
    />
    <button type="submit">Login</button>
    {error && <p className="error-message">{error}</p>}
  </form>

  <div className="extra-options">
    <p>
      Don`t have an account? <a href="/register">Sign Up</a>
    </p>
    <p>
      Forgot your password? <a href="/forgot-password">Reset it here</a>
    </p>
  </div>
</div>
</div>


  );
};

export default Login;
