import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home.js";
import Moodz from '../MoodzLogo.png';

export default function HomePage() {
    let navigate = useNavigate();

    const [token, setToken] = useState(localStorage.getItem('token'));
    useEffect(() => {
      // Grab token from localstorage
      setToken(localStorage.getItem('token'));
    }, [token]);

    return (
      <div className="Home">
        <div className="container">
            {token != null &&
              <Home />
            }
            {token == null &&
              <div>
                <div className="row align-items-center my-5">
                  <div className="col-lg-5">
                    <img
                      src={Moodz}
                      className="img-fluid rounded mb-4 mb-lg-0"
                      alt="MoodzLogo"
                      />
                  </div>
                  <div className="col-lg-7">
                    <h1 >Home </h1> {token}
                    <h3> Welcome to Moodz! </h3>
                    <p> Track your feelings daily to monitor
                    your mental health. <br/>
                    Days are colour-coded to indicate positivity
                    and negativity. <br/>
                    Monitor your feelings over time to see trends in your
                    mental health! </p>
                  </div>
                </div>
                <div className="row align-items-end">
                  <div className="col-lg-5"></div>
                  <div className="col float-right">
                    <p> This application is not currently intended to
                    replace any advice from a medical professional. If you
                    need medical assistance, please reach out to your health
                    care provider or other appropraite health care services.
                    <br/> <br/>
                    In Alberta, you can visit <a href="https://www.
                    ahs.ca/amh"> Alberta Health Services </a> or call the
                    Mental Health Helpline at <mark>1-877-303-2642</mark>
                     for a listing of services in your area.
                    </p>
                  </div>
                </div>
              </div>
            }
        </div>
      </div>
    )
}
