import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';

import { Navigation, Home, About, Contact } from "./components";
import App from './App';
import Routes1 from "./Routes";
import "bootstrap/dist/css/bootstrap.css";
//import reportWebVitals from './reportWebVitals';


ReactDOM.render(  
    <App />,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
