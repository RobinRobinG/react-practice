import React from 'react';
import './App.css';


class InfoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "By accepting the terms, you agree to be good!",
      hasAgreed: false,
      timesClicked: 0,
    }
  }
  handleTerms() {
    this.setState({
      message: "Thank you for agreed to the terms", 
      hasAgreed: true
    });
  }
  handleImageClick() {
    this.setState((prevState) => ({
      timesClicked: prevState.timesClicked + 1
    }));
  }
  render() {
    const { title, description, imgPath, id } = this.props;
    const myButton = (!this.state.hasAgreed)
      ? <button onClick = {() => this.handleTerms()} className = "btn btn-primary">Click me!</button>
      : null;

    return (
      <div className="card">
        <div onClick = { () => this.props.handleDelete(id) } className="btn btn-danger">x</div>
        <img onClick = { () => this.handleImageClick() } src = {imgPath} className="card-img-top" alt="cat pic" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          {myButton}
          <hr/>
          <p>{this.state.message}</p>
          <h2>{this.state.timesClicked}</h2>
        </div>
      </div>
    )

  }
}

export default InfoCard;