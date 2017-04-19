import React, {Component} from 'react'
import {Route, IndexRedirect} from 'react-router-dom'
//import PropTypes from 'prop-types'
import AuthService from '../../shared/utils/AuthService'
import Home from '../Home/Home'
import Login from '../Login/Login'

// onEnter callback to validate authentication in private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

const auth = new AuthService('o3zTXEps3IBqAyk3fzn12gvi4LtKZOfo', 'desertecho.eu.auth0.com');

export default class Container extends Component {
  render() {
    return (
      <div>
        <Route path="/home" component={Home} onEnter={requireAuth} />
        <Route path="/login" component={Login} />
      </div>
    )
  }
}
