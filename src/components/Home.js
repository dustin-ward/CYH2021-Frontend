import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import Day from "./Day.js"
import 'react-calendar/dist/Calendar.css';

export default function Home() {
  let navigate = useNavigate();
  const [calVal, setCalVal] = useState(new Date());

  const [token, setToken] = useState(localStorage.getItem('token'));
  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, [token]);

  const [days, setDays] = useState([]);
  useEffect(() => {
    if(token !== null) {
      console.log("Requesting days with token: "+token)
      axios({
        method: 'get',
        url: 'http://localhost:8080/days',
        headers: {
          "Authorization": `Bearer ${token}`,
        }
      })
      .then(res => {
        console.log("Response:", res.data)
        setDays(res.data.days)
      })
      .catch(err => {
        console.log(err)
        if(err.response.status === 401) {
          localStorage.removeItem('token')
          setToken(null)
          navigate('/login', {replace: true})
        }
      });
    }
  }, [token, navigate]);

  function parseISOString(s) {
    var b = s.split(/\D+/);
    return new Date(Date.UTC(b[0], --b[1], ++b[2], b[3], b[4], b[5], b[6]));
  }

  function compDates(a, b) {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  }

  function getDateObj() {
    for(let i=0; i<days.length; i++) {
      if(compDates(parseISOString(days[i].day.calendar_date), calVal)) {
        return days[i]
      }
    }
    return {
      day: {
        id: 0,
        calendar_date: "No data for this date",
      },
      tasks: [],
      moods: [],
    }
  }

  return (
    <div className="Home">
      <div className="container">
        <div >
          {token != null && 
            <div className="row align-items-center my-5">
              <div className="col-lg-2">
                <p>Left Menu</p>
              </div>
              <div className="col-lg-6">
                <Calendar onChange={setCalVal} value={calVal}/>
              </div>
              <div className="col-lg-2">
                <h2>Current Date</h2>
                <Day day={getDateObj()}/>
              </div>
            </div>
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