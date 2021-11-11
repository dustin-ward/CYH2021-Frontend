import React, { useNavigate } from 'react';
import { Link } from 'react-router-dom';

import AuthStatus from "../containers/AuthStatus";

function LogoutButton() {
  let token = localStorage.getItem('token');
  if(token === null) {
    return (
      <Link class="nav-item nav-link" to="/Login">
        Login!
      </Link>
    );
  } return (
    <Link class = "nav-item nav-link" to="/Logout" >
      looogouut
    </Link>
  );
}

export default LogoutButton;
