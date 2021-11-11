// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           yay <code>src/App.js</code> save.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
import React from 'react';
import Routes1 from "./Routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation, Home, About, Contact } from "./components";
import Login from "./containers/Login";




function App() {
  const storedJwt = localStorage.getItem('token'); //check if set to null
  return (
    //<div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes1 />
      </BrowserRouter>
    //</div>
  );
}

export default App;
