import React, {Component} from 'react'

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appRepositoryUrl: 'https://github.com/erkkapynnonen/react-todo-app'
    };

  }
  render() {
    return (
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <h1>Welcome!</h1>
          <p>This is a simple to-do app made with React for demo and learning purposes.</p>
          <p>Check out the repo on <a target="_blank" href={this.state.appRepositoryUrl}>GitHub</a>.</p>
          <p>You can use the demo account demo/demo for login as well as you Google/FB account via Oauth, provided by Auth0.</p>
        </div>
        <div className="col-xs-12 col-md-6">
          <h3>Authenticate!</h3>
        </div>
      </div>
    )
  }
}
