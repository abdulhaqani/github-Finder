import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="app">
            <Navbar></Navbar>
            <div className="container">
              <Alert></Alert>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <Fragment>
                      <Search></Search>
                      <Users></Users>
                    </Fragment>
                  )}
                ></Route>
                <Route exact path="/about" component={About}></Route>
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
