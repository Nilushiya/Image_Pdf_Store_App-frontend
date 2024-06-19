import React, { useState } from 'react';
import register from '../Components/Style/Register.css'
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    address: '', // Simplified address field
    phone_no: '',
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
        user_name: '',
        address: '',
        phone_no: '',
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

    if (!data.user_name.trim()) {
      errors.user_name = 'Username is required';
    }

    if (!data.address.trim()) {
      errors.address = 'Address is required';
    }

    if (!data.phone_no.trim()) {
      errors.phone_no = 'Phone number is required';
    }

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
    <div className="registration-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            placeholder='Username'
          />
          {errors.user_name && <div className="error">{errors.user_name}</div>}
        </div>

        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Email'
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        
        <div className="form-group">
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder='Address'
          />
          {errors.address && <div className="error" >{errors.address}</div>}
        </div>

        <div className="form-group">
          <input
            type="text"
            id="phone_no"
            name="phone_no"
            value={formData.phone_no}
            onChange={handleChange}
            placeholder='Phone Number'
          />
          {errors.phone_no && <div className="error">{errors.phone_no}</div>}
        </div>

        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder='Password'
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>

        <button type="submit" className="btn">Register</button>
      </form>
      <div className="login-link">
        <p>Already have an account? <Link to="/login" className="login">Signin</Link></p>
      </div>
    </div>
  );
};

export default Register;










