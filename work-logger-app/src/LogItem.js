import React from 'react';

class LogItem extends React.Component {

  render () {
    return (
      <li className="d-flex justify-content-between">
        <div>{this.props.description}</div>
        <div>{this.props.minutes} min</div>
        <div onClick= {() => this.props.handleDelete(this.props.key) } className="btn btn-danger">x</div>
      </li>
    )
  }

}

export default LogItem;