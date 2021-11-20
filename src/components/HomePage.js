import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home.js";
import Moodz from '../MoodzLogo.png';
import People from '../pexels-helena-lopes-708392.jpg';

export default function HomePage() {
    let navigate = useNavigate();

    const [token, setToken] = useState(localStorage.getItem('token'));
    useEffect(() => {
      // Grab token from localstorage
      setToken(localStorage.getItem('token'));
    }, [token]);

    return (
      <div className="Home">
            {token != null &&
              <Home />
            }
            {token == null &&
              <div className="container">
                <div className="row  mt-5">
                  <div className="col-lg-5">
                      <img
                        src={People}
                        className="img-fluid rounded mb-4 mb-lg-0"
                        alt="Happy People"
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
                <div className="row-lg-12 my-5">
                  <p> This application is not currently intended to
                    replace any advice from a medical professional. If you
                    need medical assistance, please reach out to your health
                    care provider or other appropraite health care services.
                    <br/> <br/>
                    In Alberta, you can visit <a href="https://www.
                    ahs.ca/amh"> Alberta Health Services </a> or call the
                    Mental Health Helpline at <mark>1-877-303-2642</mark>
                    for a listing of services in your area. Across Canada, you
                    can also find helpful information on the
                    <a href="https://cmha.ca/find-info/
                    mental-health/general-info/"> Canadian Mental
                    Health Association </a> website.
                  </p>
                </div>
              </div>
            }
      </div>
    )
}
