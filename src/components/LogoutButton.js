import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../containers/Logout';

function LogoutButton() {
  let token = localStorage.getItem('token');
  if(token === null) {
    return (
      <Link className="nav-item nav-link" to="/login">
        Login!
      </Link>
    );
  } return (
    <Logout/>
    // <Link className = "nav-item nav-link" to="/logout" >
    //   looogouut
    // </Link>
  );
}

export default LogoutButton;
