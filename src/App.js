import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';

import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  // Search github users
  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
  };

  // clear users from state
  clearUsers = () => this.setState({ users: [], looading: false });

  render() {
    return (
      <div className="app">
        <Navbar></Navbar>
        <div className="container">
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length > 0 ? true : false}
          ></Search>
          <Users loading={this.state.loading} users={this.state.users}></Users>
        </div>
      </div>
    );
  }
}

export default App;
