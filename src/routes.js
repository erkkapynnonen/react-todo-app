import React from 'react'
import {HashRouter as Router, Route, Redirect, IndexRedirect} from 'react-router-dom'
import AuthService from './shared/utils/AuthService'
import Container from './components/Main/Container'
import Home from './components/Home/Home'
import Login from './components/Login/Login'

// onEnter callback to validate authentication in private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

const auth = new AuthService('o3zTXEps3IBqAyk3fzn12gvi4LtKZOfo', 'desertecho.eu.auth0.com');

export const makeRoutes = () => {
  return (
    <Route path="/" component={Container} auth={auth}>
      <IndexRedirect to="/home" />
      <Route path="home" component={Home} onEnter={requireAuth} />
      <Route path="login" component={Login} />
    </Route>
  )
}

export default makeRoutes
