import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Route, Redirect, Link} from 'react-router-dom'
//import PropTypes from 'prop-types'
import AuthService from './shared/utils/AuthService'
import Home from './components/Home/Home'
import Login from './components/Login/Login'

// onEnter callback to validate authentication in private routes
const auth = new AuthService('o3zTXEps3IBqAyk3fzn12gvi4LtKZOfo', 'desertecho.eu.auth0.com');

const requireAuth = (nextState, replace) => {
  return auth.loggedIn()
}

const mountNode = document.querySelector('#root');
ReactDOM.render(
  // Passing auth to components could be refactored to helper functions.
  (
  <Router>
    <div>
      <Route path="/home" render={() => ( <Home auth={auth} /> )} />
      <Route path="/login" render={() => ( <Login auth={auth} /> )} />
      <Route exact path="/" render={() => (
        requireAuth() ? (
          <Redirect to="/home"/>
        ) : (
          <Redirect to="/login"/>
        )
      )}/>
    </div>
  </Router>),
mountNode);
