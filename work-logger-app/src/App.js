import React, { Component } from 'react';
import WorkLogForm from './WorkLogForm';
import LogCard from './LogCard';
import './App.css';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      works: [],
      totalWorkTime: 0,
      personals: [],
      totalPersonalTime: 0
    };
  }
  onHandleSubmit (data) {
    if (data.project === 'personal') {
      this.setState(prevState =>({
        personals: [...prevState.personals, {...data, id: Date.now()}],
        totalPersonalTime:  prevState.totalPersonalTime + parseInt(data.minutes)
      }));
    } else {
      this.setState(prevState =>({
        works: [...prevState.works, {...data, id: Date.now()}],
        totalWorkTime:  prevState.totalWorkTime + parseInt(data.minutes)
      }));
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Work Logger App</h1>
        <WorkLogForm onFormSubmit = {(data) => this.onHandleSubmit(data)} />
        <hr />
        <div className="cards">
          <LogCard title = 'Work' log = {this.state.works} totalTime = { this.state.totalWorkTime } />
          <LogCard title = 'Personal' log = {this.state.personals} totalTime ={ this.state.totalPersonalTime } />
        </div>
      </div>
    );
  }
}

export default App;
