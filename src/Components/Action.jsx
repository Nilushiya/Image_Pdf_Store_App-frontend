import React, { useEffect, useState } from 'react'
import action from './Style/Action.css'
import { Link} from 'react-router-dom';
import { decodeToken } from '../Contaxt/UserContaxt';
import Navbar from './Navbar';

const Action = () => {
  const [user_name , setUser_name] = useState('');
  const [name_firstLetter , setName_firstLetter] = useState('');

  useEffect(() => {
    const decode = decodeToken();
     const user_name = decode.user_name;
     const firstLetter = user_name.charAt(0).toUpperCase();
     console.log("first : ", firstLetter)
     setUser_name(user_name)
  },[])
  
    return (
        <div className="container">
          <Navbar />
          <h1 className="heading">Choose an Action</h1>
          <div className="button-container">
            <Link className="animated-button" to='./image'>Image</Link>
            <Link className="animated-button" to='./pdf'>PDF</Link>
          </div>
        </div>
      );
}

export default Action