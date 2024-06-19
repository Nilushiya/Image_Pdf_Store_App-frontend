import React, { useState } from 'react';
import login from '../Components/Style/Login.css'
import { Link } from 'react-router-dom';



const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, submit the data (you can make an API call here)
      console.log('Form data:', formData);
      // Reset form state
      setFormData({
        email: '',
        password: ''
      });
      setErrors({});
    } else {
      // Form validation failed, update errors state
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email address is invalid';
    }

    if (!data.password.trim()) {
      errors.password = 'Password is required';
    } else if (data.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    return errors;
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>

        <button type="submit" className="btn">Signin</button>
      </form>
      <div className="login-link">
        <p>Already  don't have an account? <Link to="/register" className="signup">Signup</Link></p>
      </div>
      <div className="loginpass">
      <Link to="/" className="forgot_password"><p>forgot password?</p></Link>
      </div>
    </div>
  );
};

export default Login;
