import React, {Component} from 'react'

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <h1>App home</h1>
          <p>This is the protected area.</p>
        </div>
      </div>
    )
  }
}
