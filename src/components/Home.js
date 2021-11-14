import axios from "axios";
import React from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      token: localStorage.getItem('token'),
      days: [],
      calVal: new Date()
    };
    this.getDays = this.getDays.bind(this);
  }

  componentDidMount() {
    this.setState({token: localStorage.getItem('token')})
    if(this.state.token != null) {
      this.getDays();
    }
    console.log("State:", this.state)
  }

  getDays() {
    console.log("Requesting days with token: "+this.state.token)
    axios({
      method: 'get',
      url: 'http://localhost:8080/days',
      headers: {
        "Authorization": `Bearer ${this.state.token}`
      }
    })
    .then(function (res) {
      console.log("Response:", res.data)
      this.setState((state) => ({
        days: res.data.days
      }))
    })
    .catch(function (err) {
      console.log(err)
    })
  }

  onChange = date => {
    this.setState({calVal: date })
    console.log(this.state)
  }
  
  render() {
    return (
    <div className="Home">
      <div className="container">
        <div className="row align-items-center my-5">
          {this.state.token != null && 
            <div>
              <div className="col-lg-7">
                <Calendar onChange={this.onChange} value={this.state.calVal}/>
              </div>
              <div className="col-lg-5">
              </div>
            </div>
          }
          {this.state.token == null &&
            <div>
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