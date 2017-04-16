import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Welcome from './Welcome'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route path="/" component={Welcome} />
        </div>
      </Router>
    )
  }
}
