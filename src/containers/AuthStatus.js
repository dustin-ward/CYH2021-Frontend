import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

// function()

export default function AuthStatus() {
  let navigate = useNavigate();
  let token = localStorage.getItem('token');

  if (token === null) {
    return <p> You are not logged in!!! </p>
  }
  return (
    <div> <p>
      Welcome !
      {/*this.username}!{" "}*/}
      <button
        onClick={() => {
          axios({
            method: 'get',
            url: 'http://localhost:8080/logout',
            headers: {
              "Authorization": `Bearer ${token}`
            }
          })
            .then(function (res) {
          })
          localStorage.removeItem('token');
          //navigate("/");
        }}
        >
          Sign out!
        </button>
    </p></div>
  );
}
