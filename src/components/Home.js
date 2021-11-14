import axios from "axios";
import React from "react";
import Calendar from "react-calendar";
import Day from "./Day.js"
import 'react-calendar/dist/Calendar.css';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      token: localStorage.getItem('token'),
      days: [],
      calVal: new Date()
    };
  }

  componentDidMount() {
    this.setState({token: localStorage.getItem('token')})
    if(this.state.token != null) {
      this.getDays();
    }
    console.log("State:", this.state)
  }

  getDays = () => {
    console.log("Requesting days with token: "+this.state.token)
    axios({
      method: 'get',
      url: 'http://localhost:8080/days',
      headers: {
        "Authorization": `Bearer ${this.state.token}`,
      }
    })
    .then(res => {
      console.log("Response:", res.data)
      this.setState({days: res.data.days})
    })
    .catch(err => {
      console.log(err)
    })
  }

  onChange = date => {
    this.setState({calVal: date })

    console.log(this.state)
  }

  parseISOString = (s) => {
    var b = s.split(/\D+/);
    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
  }

  compDates = (a, b) => {
    console.log("A", a, "B", b)
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  }

  getDateObj = () => {
    for(let i=0; i<this.state.days.length; i++) {
      if(this.compDates(this.parseISOString(this.state.days[i].day.calendar_date), this.state.calVal)) {
        console.log("returning", this.state.days[i])
        return this.state.days[i]
      }
    }
    console.log("returning default date")
    return {
      day: {
        calendar_date: "No data for this date",
      },
      tasks: [],
      moods: [],
    }
  }
  
  render() {
    return (
    <div className="Home">
      <div className="container">
        <div >
          {this.state.token != null && 
            <div className="row align-items-center my-5">
              <div className="col-lg-7">
                <Calendar onChange={this.onChange} value={this.state.calVal}/>
              </div>
              <div className="col-lg-5">
                <h2>Current Date</h2>
                <Day day={this.getDateObj()}/>
              </div>
            </div>
          }
          {this.state.token == null &&
            <div className="row align-items-center my-5">
              <div className="col-lg-7">
              </div>
              <div className="col-lg-5">
                <h1 >Home </h1> {this.state.token}
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
}