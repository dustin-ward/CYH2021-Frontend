import React from 'react';
import axios from 'axios';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      id: 0,
      username: '',
      password: '',
      email: ''
    };
  }

  componentDidMount() {
    axios.get(`localhost:8080/users/${props.id}`)
      .then(r => this.setState({
        email: r.data.email,
        password: r.data.password}));
  }


  render() {

  }
}


export default Home;
