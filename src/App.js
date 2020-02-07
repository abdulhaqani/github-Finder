import React, { useState, Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GithubState from './context/github/GithubState';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  const [alert, setAlert] = useState(null);

  // Set Alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <GithubState>
      <Router>
        <div className="app">
          <Navbar></Navbar>
          <div className="container">
            <Alert alert={alert}></Alert>
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search setAlert={showAlert}></Search>
                    <Users></Users>
                  </Fragment>
                )}
              ></Route>
              <Route exact path="/about" component={About}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
