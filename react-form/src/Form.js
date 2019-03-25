import React from 'react';

class Form extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      title: "",
      description: "",
      imgPath: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
    this.setState({
      title: "",
      description: "",
      imgPath: ""
    })
  }

  render () {
    return (
      <form onSubmit={(this.handleSubmit)}>
        <div className = "form-group">
          <label htmlFor="title">Title</label>
          <input className="form-control" type="type" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
        </div>
        <div className = "form-group">
          <label htmlFor="description">Description</label>
          <input className="form-control" type="type" value={this.state.description} onChange={(event) => this.setState({description: event.target.value})} />
        </div>
        <div className = "form-group">
          <label htmlFor="description">Image URL</label>
          <input className="form-control" type="type" value={this.state.imgPath} onChange={(event) => this.setState({imgPath: event.target.value})} />
        </div>
        <button type="submit" className="btn btn-primary">SUBMIT</button>
      </form>

    )
  }
}

export default Form;