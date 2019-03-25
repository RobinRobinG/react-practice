import React from 'react';

class Timer extends React.Component {

  getInitialState () {
    return { elapsed: 0 };
  }
  componentDidMount () {
    this.timer = setInterval(this.tick, 1000);
  } 
  componentWillUnmount () {
    clearInterval(this.timer);
  }
  tick () {
    this.setState({elapsed: new Date() - this.start});
  }
  render () {
    let elapsed = Math.round(this.state.elapsed / 100);
    let seconds = (elapsed / 10).toFixed(1);

    return (
      <p>Timer: {seconds}</p>
    )
  }

}

export default Timer;