import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
//import Home from './components/Home';
import { Navigation, Home, About, Contact } from "./components";
import App from './App';
import Routes1 from "./Routes";
import "bootstrap/dist/css/bootstrap.css";
//import reportWebVitals from './reportWebVitals';
//
// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }
//
// const user = {
//   firstName: 'Jewels',
//   lastName: 'AbC'
// };
//
//
// function Welcome(props) {
//   return <h1>Hello, {props.name}? </h1>;
// }
//
// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }
//
// function GuestGreeting(props) {
//   return <h1>Please sign in or sign up.</h1>;
// }
//
// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }
//
// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   );
// }
//
// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   );
// }
//
// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }
//
//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }
//
//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }
//
//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />;
//     }
//
//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }
//
// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};
//
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }
//
//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }
//
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }
//
// class EssayForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: 'Please write an essay about your fav DOM element.'
//     };
//
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }
//
//   handleSubmit(event) {
//     alert('An essay was submitted: ' + this.state.value);
//     event.preventDefault();
//   }
//
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Essay:
//           <textarea value={this.state.value} onChange={this.handleChange} />
//         </label>
//       <input type="submit" value="Submit" />
//     </form>
//   );
//   }
// }
//
// const scaleNames = {
//   c: 'Celsius',
//   f: 'Fahrenheit'
// };
//
// function toCelsius(fahrenheit) {
//   return (fahrenheit - 32) * 5 / 9;
// }
//
// function toFahrenheit(celsius) {
//   return (celsius * 9 / 5) + 32;
// }
//
// function tryConvert(temperature, convert) {
//   const input = parseFloat(temperature);
//   if (Number.isNaN(input)) {
//     return '';
//   }
//   const output = convert(input);
//   const rounded = Math.round(output * 1000) / 1000;
//   return rounded.toString();
// }
//
// function BoilingVerdict(props) {
//   if (props.celsius >= 100) {
//     return <p>The water boils!</p>;
//   }
//   return <p>The water does not boil. </p>;
// }
//
// class TemperatureInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//   }
//
//   handleChange(e) {
//     this.props.onTemperatureChange(e.target.value);
//   }
//
//   render() {
//     const temperature = this.props.temperature;
//     const scale = this.props.scale;
//     return (
//       <fieldset>
//         <legend>Enter temperature in {scaleNames[scale]}:</legend>
//         <input value={temperature}
//           onChange={this.handleChange} />
//       </fieldset>
//     );
//   }
// }
//
// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//     this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//     this.state = {temperature: '', scale: 'c'};
//   }
//
//   handleCelsiusChange(temperature) {
//     this.setState({scale: 'c',temperature});
//   }
//   handleFahrenheitChange(temperature) {
//     this.setState({scale: 'f', temperature});
//   }
//
//   render() {
//     const scale = this.state.scale;
//     const temperature = this.state.temperature;
//     const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
//     const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
//     return (
//       <div>
//         <TemperatureInput
//           scale="c"
//         temperature= {celsius}
//       onTemperatureChange={this.handleCelsiusChange} />
//         <TemperatureInput scale="f"
//         temperature={fahrenheit}
//         onTemperatureChange={this.handleFahrenheitChange}/>
//         <BoilingVerdict
//           celsius={parseFloat(celsius)}  />
//     </div>
//       // <fieldset>
//       //   <legend>Enter temperature in C:</legend>
//       //   <input
//       //     value={temperature}
//       //     onChange={this.handleChange} />
//       //     <BoilingVerdict
//       //       celsius={parseFloat(temperature)} />
//       // </fieldset>
//     );
//   }
// }
//
// // function Comment(props) {
// //   return (
// //     <div className="Comment">
// //       <UserInfo user={props.author} />
// //       <div className="Comment-text">
// //         {props.text}
// //       </div>
// //       <div className="Comment-date">
// //         {formatDate(props.date)}
// //       </div>
// //     </div>
// //   );
// // }
//
// function Avatar(props) {
//   return (
//     <img className="Avatar"
//       src={props.user.avatarUrl}
//       alt={props.user.name}
//     />
//   );
// }
// function UserInfo(props) {
//   return (
//     <div className="UserInfo">
//       <Avatar user={props.user} />
//       <div className="UserInfo-name">
//         {props.user.name}
//       </div>
//     </div>
//   );
// }
//
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }
//
//   componentDidMount() {
//     this.timerID  = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }
//
//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }
//
//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }
//
//   render() {
//       return (
//         <div>
//           <h1>Hello, world!</h1>
//           <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//         </div>
//
//       );
//   }
// }
//
// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};
//
//     this.handleClick = this.handleClick.bind(this);
//   }
//
//   handleClick() {
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }
//
//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }
//
// function SplitPane(props) {
//   return (
//     <div className="SplitPane">
//       <div className="SpliitPane-left">
//         {props.left}
//       </div>
//       <div className="SplitPane-right">
//         {props.right}
//       </div>
//     </div>
//   );
// }
//
// function App1() {
//   return (
//     <SplitPane
//       left={
//         <table>
//           <tr>
//             <td>
//               <Welcome name="J" />
//               <Clock />
//             </td>
//             <td>
//               <Welcome name="B" />
//               <Clock />
//               <Calculator />
//             </td>
//             <td>
//               <Welcome name="D" />
//               <Clock />
//             </td>
//           </tr>
//           <tr>
//             <td>
//               <h3> Hi </h3>
//               <Toggle />
//             </td>
//           </tr>
//         </table>
//       }
//       right={
//         <td>
//           <LoginControl /><br></br> Hi
//           <NameForm />
//           <EssayForm />
//         </td>
//       } />
//   );
// }

ReactDOM.render(
    <App />,
// <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
