import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
//can be replaced with other packages later:
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  let location = useLocation();
  let navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    console.log(email, password);
    axios.post('http://localhost:8080/login', {
      email: email,
      password: password
    })
    .then(function (response) {
      console.log(response.data.access_token);
      localStorage.setItem('token', response.data.access_token);
      //const storedJwt = localStorage.getItem('token'); to get this again
      navigate(from, { replace: true });

    })
    .catch(function (error) {
      alert(error);
      setErr(error.response.status) ;
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    });
    event.preventDefault();
  }

  function Prior() {
    if (from !== "/" && "/about") {
      return( <p> You must log in to view {from} </p>);
    }
    return (<p> Hi! </p>);
  }

  function Alert() {
    if (err === 403) {
      return (
        <div class="alert alert-warning" role="alert">
        <p> Wrong password! </p>
        </div>
      );
    } else if(err === 404) {
      return (
        <div class="alert alert-warning" role="alert">
        <p> This account does not exist! </p>
        </div>
      );
    } return (<div></div>);
  }

  return (
    <div> <Prior />

    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
      </div>
      <div> <Alert />
      </div>
    </div>
  );
}
