import React from "react";
import { Link, useLocation } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import "./All.css";
import "bootstrap/dist/css/bootstrap.css";


// const routes = {
//   "/about": () => <About />,
//   "/": () => <Home />,
//   "contact": () => <Contact />
// };

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   componentDidMount() {
//     this.timerID  = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//       return (
//         <div>
//           <h1>Hello, world!</h1>
//           <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//         </div>

//       );
//   }
// }
//collapseOnSelect
export default function Navigation() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <div className="Navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark" >
        <Link className="navbar-brand" to="/">
        Moodz
        <img
          className="cow navbar-brand"
          alt="MoodzLogo"
          />
        </Link>
        <div className="container">
          <ul className="navbar-nav mr-auto">
            /<li className={splitLocation[1] === "" ? "active" : ""}>
            <Link className="nav-item nav-link" to ="/">
              Home
            </Link>
          </li>
          |
            <li className={splitLocation[1] === "about" ? "active" : ""}>
            <Link className="nav-item nav-link" to="/about">
              About
            </Link> </li> |
            <li className={splitLocation[1] === "contact" ? "active" : ""}>
            <Link className="nav-item nav-link" to="/contact">
              Contact
            </Link> </li>
          </ul>
          <LogoutButton />
        </div>
      </nav>
    </div>
  );
}
