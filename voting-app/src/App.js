import React, { Component } from 'react';
import Votecard from './Votecard';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div className="App">
        <Votecard title = "React" message = "You voted for React!"/>
        <Votecard title = "Vue" message = "You voted for Vue!"/>
        <Votecard title = "Angular" message = "You voted for Angular!"/>
        <Votecard title = "Ember" message = "You voted for Ember!"/>
      </div>
    );
  }
}

export default App;
