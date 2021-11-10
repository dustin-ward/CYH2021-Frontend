import React from "react";
import { Link, withRouter } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import About from './About';
import Home from "./Home";
import Contact from "./Contact";

// const routes = {
//   "/about": () => <About />,
//   "/": () => <Home />,
//   "contact": () => <Contact />
// };

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID  = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>

      );
  }
}

function Navigation() {
  return (
    <div className="Navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            React Multi-Page Website
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">
              <li>
                <Link to="/">
                  Home <Clock />
                </Link>
              </li>
              <li>
                <Link to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
