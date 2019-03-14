import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  handleClick(){
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }
  render() {
    const {title, question, hint, imgPath} = this.props;
    const myView = (this.state.count % 2 === 0)
      ? <div><h1>{title}</h1><p>{question}</p></div>
      : <p>{hint}</p>
    return (
      <div className = "card" onClick = {()=> this.handleClick()}>
        <img src = {imgPath} className="card-img-top" alt="baseball pic" />
        {myView}
      </div>
    );
  }
}

export default App;
