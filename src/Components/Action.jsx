import React, { useEffect, useState } from 'react'
import action from './Style/Action.css'
import { Link} from 'react-router-dom';
import { decodeToken } from '../Contaxt/UserContaxt';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCamera, faEye } from '@fortawesome/free-solid-svg-icons'; 

const Action = () => {
  const [user_name , setUser_name] = useState('');
  const [name_firstLetter , setName_firstLetter] = useState('');

  useEffect(() => {
    const decode = decodeToken();
     const user_name = decode.user_name;
     setUser_name(user_name)
     const firstLetter = user_name.charAt(0).toUpperCase();
     setName_firstLetter(firstLetter)
     console.log("first : ", firstLetter)
  },[])

    return (
        <div className="container">
          <Navbar />
          <div className="profile-circle">
           {name_firstLetter ? <p style={{fontSize:"40px"}}>{name_firstLetter}</p> : <FontAwesomeIcon icon={faCamera} className="fa-2x" />}
          </div>
          <div className="profile-actions">
            <Link className="icon-button" to='/profile/edit'>
              <FontAwesomeIcon icon={faEye}  />
            </Link>
            <Link className="icon-button" to='/profile/view'>
              <FontAwesomeIcon icon={faEdit}  />
            </Link>
          </div>
          <h1 className="heading">Choose an Action</h1>
          <div className="button-container">
            <Link className="animated-button" to='./image'>Image</Link>
            <Link className="animated-button" to='./pdf'>PDF</Link>
          </div>
        </div>
      );
}

export default Action