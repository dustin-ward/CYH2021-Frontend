import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../components/All.css';

export default function Logout(){
  let token = localStorage.getItem('token');
  let navigate = useNavigate();

  if (token === null) {
    return (navigate("/"))
  }
  return (
    <button
      className = "nav-item nav-link button"
      onClick={() => {
        axios({
          method: 'get',
          url: 'http://localhost:8080/logout',
          headers: {
            "Authorization": `Bearer ${token}`,
          }
        })
          .then(function (res) {
        })
        localStorage.removeItem('token');
        navigate("login");
      }}
    >
 Sign out!
  </button>
  )
}
