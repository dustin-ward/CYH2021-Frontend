import React from 'react';
import { Link } from 'react-router-dom';

function LogoutButton() {
  let token = localStorage.getItem('token');
  if(token === null) {
    return (
      <Link className="nav-item nav-link" to="/Login">
        Login!
      </Link>
    );
  } return (
    <Link className = "nav-item nav-link" to="/Logout" >
      looogouut
    </Link>
  );
}

export default LogoutButton;
