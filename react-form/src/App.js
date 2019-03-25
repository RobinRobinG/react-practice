import React from 'react';
import Form from './Form';
import InfoCard from './InfoCard';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      cards: [],
    };
  }
  onHandleSubmit(data) {
    this.setState(prevState => ({
      cards: [...prevState.cards, {...data, id: Date.now()}]
    }));
  }
  reduceCards(id) {
    this.setState(prevState => ({
      cards: prevState.cards.filter( card => card.id !== id)
    }))
  }
  buildCards () {
    if (this.state.cards < 1) {
      return null;
    }
    return this.state.cards.map((card, index) => {
      // return React.createElement(InfoCard, {...card, key: Date.now()}, null);
      const {title, description, imgPath, id} = card;
      return <InfoCard 
              title={title} 
              description={description} 
              imgPath={imgPath} 
              key={index} 
              id= {id} 
              handleDelete = { (id) => this.reduceCards(id) } />
    })
  }
  render() { 
    return (
      <div className="container">
        <h1>Add a new thing!</h1>
        <Form onFormSubmit={(formdata) => this.onHandleSubmit(formdata)} />
        <hr />
        <div className="cards">
          {this.buildCards()}
        </div>
      </div>
    );
  }
}

export default App;
