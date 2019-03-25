import React from 'react';

class SimpleForm extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      text: "type something",
    }
  }
  onInputChange = (event) => {
    this.setState({text: event.target.value});
  }
  onFormSubmit = (event) => {
    event.preventDefault();
    alert(`${this.state.text} was submitted!`);
    this.setState({text:''});
  }
  render () {
    return (
      <form onSubmit = { this.onFormSubmit }>
        <input type = "text"
              value = { this.state.text }
              onChange = { this.onInputChange } />
        <button>SUBMIT</button>
      </form>
    )
  }
}
export default SimpleForm;