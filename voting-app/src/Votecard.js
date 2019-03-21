import React, { Component } from 'react';

class Votecard extends Component {

  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  handleCount() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <div className = "votecard d-flex justify-content-between">
      <div className = "item">
        <div className = "count">{this.state.count}</div>
      </div>
      <div className = "item">
        <h1>{this.props.title}</h1>
      </div>
      <div className = "item">
        <button onClick={()=> this.handleCount()}>+</button>
      </div>
    </div>
    );
  }
}



export default Votecard;