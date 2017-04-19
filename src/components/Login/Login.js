import React, {Component} from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap'
import PropTypes from 'prop-types'
import AuthService from '../../shared/utils/AuthService'

export class Login extends Component {
  render() {
    const { auth } = this.props
    console.log(this.props)
    return (
      <div>
        <h2>Login</h2>
        <ButtonToolbar>
          <Button bsStyle="primary" onClick={auth.login.bind(this)}>Login</Button>
        </ButtonToolbar>
      </div>
    )
  }
}

export default Login;
