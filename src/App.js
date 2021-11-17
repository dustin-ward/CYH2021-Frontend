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
import { BrowserRouter } from "react-router-dom";
//import { Navigation, Home, About, Contact } from "./components";
import { Navigation } from "./components";
//import Login from "./containers/Login";
import './components/All.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes1 />
      </BrowserRouter>
     </div>
  );
}

export default App;
