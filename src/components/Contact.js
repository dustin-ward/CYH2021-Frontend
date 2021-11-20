import React from "react";
import './All.css';

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-12">
            <h1 className="font-weight-light">Contact</h1>
            <p>
              This mental health web application was created by Dustin Ward and
              Julie Wojtiw-Quo. You can find the source code here:
              <br/><a href="" >Front End</a>
              <br/><a href="" >Back End</a>
              <br/><br/> External tools used included:
                React, Node.js MySQL, GoLang and JWT
                <br /> React Libraries include react-bootstrap, react-router-dom,
                and Axios
                <br/> Open source photos from <a href="http://www.pexels.com"> Pexels </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
