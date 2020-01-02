import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';

import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar></Navbar>
        <UserItem></UserItem>
      </div>
    );
  }
}

export default App;
