import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { requestPasswordReset } from '../Contaxt/UserContaxt';
import '../Components/Style/Login.css';
import 'react-toastify/dist/ReactToastify.css'; 

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState({});

  const validateEmail = (email) => {
    let error = {};

    if (!email.trim()) {
      error.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error.email = 'Email address is invalid';
    }

    return error;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateForm = validateEmail(email);
    if (Object.keys(validateForm).length === 0) {
      try {
        const response = await requestPasswordReset({ email });
        if (response.data.success) {
          toast.success('Password reset link sent to your email', {
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.error(response.data.error, {
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      } catch (error) {
        toast.error('Failed to send password reset email. Please try again later.', {
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      setError(validateForm);
    }
  };

  return (
    <div className="forgot-password-form">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError({});
            }}
            placeholder="Enter your email"
          />
          {error.email && <div className="error">{error.email}</div>}
        </div>
        <button type="submit" className="btn">Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;
