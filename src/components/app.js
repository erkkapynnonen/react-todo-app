import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Welcome from './Welcome'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/app">Welcome</Link></li>
            </ul>
          </nav>
          <hr />
          <Route path="/app" component={Welcome} />
        </div>
      </Router>
    )
  }
}
