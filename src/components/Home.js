import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import Day from "./Day.js"
import './Calendar.css';

export default function Home() {
  let navigate = useNavigate();
  const [calVal, setCalVal] = useState(new Date());

  const [token, setToken] = useState(localStorage.getItem('token'));
  useEffect(() => {
    // Grab token from localstorage
    setToken(localStorage.getItem('token'));
  }, [token]);

  const [days, setDays] = useState([]);
  useEffect(() => {
    if(token !== null) {
      getDays();
    }
  }, [token, navigate]);

  function getDays() {
    // Make API call to get all days for user
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

  // Convert MySQL date string to JS date obj
  function parseISOString(s) {
    var b = s.split(/\D+/);
    return new Date(Date.UTC(b[0], --b[1], ++b[2], b[3], b[4], b[5], b[6]));
  }

  // Check equality between dates (ignoring time)
  function compDates(a, b) {
    if(a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()) {
      console.log("a", a, "=== b", b)
    }
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  }

  // Find date in array (if exists) that matches selected calendar value
  function getDateObj() {
    for(let i=0; i<days.length; i++) {
      if(compDates(parseISOString(days[i].day.calendar_date), calVal)) {
        return days[i]
      }
    }
    return {
      day: {
        id: 0,
        calendar_date: calVal.toISOString(),
      },
      tasks: [],
      moods: [],
    }
  }

  const tileClassName = useCallback(({date, view}) => {
    // return 'moodNeg3'
    let c = 'moodNtrl'
    days.forEach((day) => {
      if(compDates(parseISOString(day.day.calendar_date), date)){
        if(day.day.value >= 2) {
          console.log("returning 1")
          c = 'moodPos3' 
          return
        } else if(day.day.value >= 1) {
          console.log("returning 2")
          c = 'moodPos2' 
          return
        } else if(day.day.value > 0) {
          console.log("returning 3")
          c = 'moodPos1' 
          return
        } else if(day.day.value === 0) {
          console.log("returning 4")
          c = 'moodNtrl' 
          return
        } else if(day.day.value > -0.99) {
          console.log("returning 5")
          c = 'moodNeg1' 
          return
        } else if(day.day.value > -1.99) {
          console.log("returning 6")
          c = 'moodNeg2' 
          return
        } else {
          console.log("returning 7")
          c = 'moodNeg3' 
          return
        }
      }
    })
    return c
  }, [days, calVal]);

  // Change display if token === null
  return (
    <div className="Home">
      <div className="container">
        <div >
          <div className="row align-items-center my-5">
            <div className="col-lg-2">
              <p>Left Menu</p>
            </div>
            <div className="col-lg-6">
              <Calendar 
                onChange={setCalVal} 
                value={calVal}
                tileClassName={tileClassName}
              />
            </div>
            <div className="col-lg-2">
              <h2>Current Date</h2>
              <Day day={getDateObj} update={getDays}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
