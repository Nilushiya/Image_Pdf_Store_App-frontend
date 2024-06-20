import axios from 'axios'
import {jwtDecode} from 'jwt-decode';
// import { useNavigate } from 'react-router-dom';
import React, { createContext, useContext, useEffect, useState } from 'react';

const BASE_URL = 'http://localhost:4000/api';






export const requestPasswordReset = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/user/request-password-reset`, data);
    console.log("response : ",response.data);
    return response
  } 
  catch (error) {
    console.error("Error:", error);
  }
};

export const resetPassword = async (data) => {
  return await axios.post(`${BASE_URL}/user/reset-password`, data);
};



// Register
export const checkRegister = async(formData) => {
    try {
      const response = await axios.post(`${BASE_URL}/user/signup`, formData);
      console.log("response : ",response.data)

      return response
    } 
    catch (error) {
      console.error("Error:", error);
    }
  }
  // Login
export const checklogin = async(formData) => {
    try {
      const response = await axios.post(`${BASE_URL}/user/signin`, formData);
      console.log("response : ",response.data)
      return response
    } 
    catch (error) {
      console.error("Error:", error);
    }
  }
  
  
    // Token
  export const decodeToken = () => {
    try{
      const token = localStorage.getItem('token');
      const decodeToken = jwtDecode(token);
      return decodeToken;
    }
    catch(err){
      return null;
    }
    
    }
