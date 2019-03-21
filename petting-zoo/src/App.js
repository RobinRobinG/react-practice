import React from 'react';
import AnimalCard from './AnimalCard';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    }
  }

  handleMessage(name) {
    const newMessage = `You just pet the ${name}`;
    this.setState({message: newMessage});
  }

  render() {
    return (
      <div className="App">
        <h1>Petting Zoo!</h1>
        <AnimalCard name = "Horse" onPetAnimal = {(name) => this.handleMessage(name)}/>
        <AnimalCard name = "Goat" onPetAnimal = {(name) => this.handleMessage(name)}/>
        <AnimalCard name = "Sheep" onPetAnimal = {(name) => this.handleMessage(name)}/>
        <AnimalCard name = "Mouse" onPetAnimal = {(name) => this.handleMessage(name)}/>
        <h3>{this.state.message}</h3>
      </div>
    );
  }
}

export default App;
