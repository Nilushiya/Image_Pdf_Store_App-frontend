import React from 'react'
import action from './Style/Action.css'
import { Link } from 'react-router-dom';

const Action = () => {
    return (
        <div className="container">
            <div className="top-bar">
                <Link className="home-icon" ><i className="fas fa-home"></i></Link>
                <Link className="logout-icon" ><i className="fas fa-home"></i></Link>

                {/* <div className="home-icon" onClick={() => history.push('/')}>
                <FontAwesomeIcon icon={faHome} />
                </div>
                <div className="logout-icon" onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} />
                </div> */}
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