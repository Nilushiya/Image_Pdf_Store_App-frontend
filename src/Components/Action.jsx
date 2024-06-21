import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { decodeToken } from '../Contaxt/UserContaxt';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faUser } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button } from 'react-bootstrap';
import './Style/Action.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Action = () => {
  const [user_name, setUser_name] = useState('');
  const [name_firstLetter, setName_firstLetter] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editModal, setModal] = useState(false);
  useEffect(() => {
    const decode = decodeToken();
    const user_name = decode.user_name;
    setUser_name(user_name);
    const firstLetter = user_name.charAt(0).toUpperCase();
    setName_firstLetter(firstLetter);
    console.log("first : ", firstLetter);
  }, []);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const handleEdit = () => setModal(true);
  const handleEditClose = () => setModal(false);

  return (
    <>
      <div className="container">
        <Navbar />
        <div className="profile-circle">
          <img className='image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpHAFH61T04_MydAWCka1ncFaA3ASrYY6v-g&s' alt="Profile" />
        </div>
        <div className="profile-actions">
          <button className="icon-button" onClick={handleShow}>
            <FontAwesomeIcon icon={faEye} />
          </button>
          <button className="icon-button" onClick={handleEdit}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </div>
        <h1 className="heading">Choose an Action</h1>
        <div className="button-container">
          <Link className="animated-button" to='./image'>Image</Link>
          <Link className="animated-button" to='./pdf'>PDF</Link>
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose} centered className='model '> 
     
       <div className='modelbox'>
          <h1 className='head' style={{color:"white"}}> <FontAwesomeIcon icon={faUser} /></h1>
          <p>Username: {user_name}</p>
          <p>Username: {user_name}</p>
          <p>Username: {user_name}</p>
          <Button variant="secondary" onClick={handleClose} className='modelFooter '>
            Close
          </Button>
       </div>
      </Modal>
      <Modal show={editModal} onHide={handleClose} centered className='model '> 
     
       <div className='modelbox'>
          <h1 className='head' style={{color:"white"}}> <FontAwesomeIcon icon={faUser} /></h1>
          <p>Username: {user_name}</p>
          <p>Username: {user_name}</p>
          <p>Username: {user_name}</p>
          <Button variant="secondary" onClick={handleEditClose} className='modelFooter '>
            Close
          </Button>
       </div>
      </Modal>
    </>
  );
}

export default Action;
