import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Day from "./Day.js";
import Home from "./Home.js";
import 'react-calendar/dist/Calendar.css';

export default function HomePage() {
    let navigate = useNavigate();
    const [calVal, setCalVal] = useState(new Date());

    const [token, setToken] = useState(localStorage.getItem('token'));
    useEffect(() => {
      // Grab token from localstorage
      setToken(localStorage.getItem('token'));
    }, [token]);

    return (
      <div className="Home">
        <div className="container">
          <div >
            {token != null &&
              <Home />
            }
            {token == null &&
              <div className="row align-items-center my-5">
                <div className="col-lg-7">
                </div>
                <div className="col-lg-5">
                  <h1 >Home </h1> {token}
                  <p>

                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    )
}
