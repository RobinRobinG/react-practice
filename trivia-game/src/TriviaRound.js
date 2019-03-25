import React from 'react';
import Hint from './Hint';
import './App.css';

class TriviaRound extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      isHidden: true,
      timer: null,
      counter: 0
    }
    this.toggleHidden = () => {
      this.setState({ isHidden: !this.state.isHidden })
    }
  }
  componentDidMount() {
    let timer = setInterval(this.tick, 1000);
    this.setState({timer});
  };
  componentWillUnmount() {
      this.clearInterval(this.state.timer);
  }
  tick() {
      this.setState({
        counter: this.state.counter + 1
      });
  }
  render() {
    let answersList = this.props.question.answers.map((answer) => {
      return <li className="btn btn-primary">{answer.value}</li>
    })
    return (
    <div className="trivia">
        <div className="timer">
          {this.state.counter}
        </div>
        <div className="d-flex justify-content-center">
          <div className="card">
            <img src = {this.props.question.topic.imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{this.props.question.topic.title}</h5>
              <p className="card-text">{this.props.question.description}</p>
              <button 
                    className = "btn btn-secondary"
                    onClick = { this.toggleHidden }>show Hint</button>
              {!this.state.isHidden && <Hint hint = {this.props.question.hint} />}
            </div>
          </div>
        </div> 
        <ul className= "answers d-flex justify-content-around">
            {answersList}
        </ul>
    </div>
    )
  }
}


export default TriviaRound;