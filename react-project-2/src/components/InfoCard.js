import React from 'react';

// const ButtonOne = (props) => {
//   return <button onClick={function(){alert("You clicked me!")}}>Click Me!</button>;
// }
// // Note the anonymous event handler: You will commonly see this done using ES6 arrow syntax
// const ButtonTwo = (props) => {
//   return <button onClick={()=> alert("You clicked me!")}>Click Me!</button>;
// }
// // We may also define the handler as a function inside our component
// const ButtonThree = (props) => {
//   function handleClick() {
//       alert("You clicked me!");
//   }
//   return <button onClick={handleClick}>Click Me!</button>;
// }


// const InfoCard = (props) => {
//   const { imgPath, title, description } = props;
//   return (
//     <div className="card">
//       <img src = {imgPath} className="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title">{title}</h5>
//         <p className="card-text">{description}</p>
//         <button className = "btn btn-primary">Click me!</button>
//         <hr/>
//         <p>Hello This is some text...!</p>
//       </div>

//     </div>
//   );
// };

class InfoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "By accepting the terms, you agree to be good!",
      imgPath: "./images/img.jpg",
      hasAgreed: false,
      timesClicked: 0,
    }
  }
  handleTerms() {
    this.setState({
      message: "Thank you for agreed to the terms", 
      imgPath: "./images/kitten.jpg",
      hasAgreed: true
    });
  }
  handleImageClick() {
    this.setState((prevState) => ({
      timesClicked: prevState.timesClicked + 1
    }));
  }
  render() {
    const { title, description } = this.props;
    const myButton = (!this.state.hasAgreed)
      ? <button onClick = {() => this.handleTerms()} className = "btn btn-primary">Click me!</button>
      : null;

    return (
      <div className="card">
        <img onClick = { () => this.handleImageClick() } src = {this.state.imgPath} className="card-img-top" alt="cat pic" />
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