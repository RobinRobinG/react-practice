import React from 'react';
import './App.css'

class WorkLogForm extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      project: 'work',
      description: '',
      minutes: 0
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleProjectChange (event) {
    this.setState({ project: event.target.value })
  }
  handleFormSubmit (event) {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
    this.setState({
      project: 'work',
      description: '',
      minutes: 0
    })
  }

  render () {
    return (
      <form onSubmit = { this.handleFormSubmit }>
        <div className="form-group">
          <label htmlFor="project">Project</label>
          <select className="form-control" 
                  value = { this.state.project }
                  onChange={this.handleProjectChange.bind(this)} >
            <option value = '123'></option>
            <option value = 'work'>Work</option>
            <option value = 'personal'>Personal</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea className="form-control"
                    rows="2"
                    value = {this.state.description}
                    onChange = {(event) => this.setState({ description: event.target.value })}
          ></textarea>
        </div>
        <div className="form-group">
        <label htmlFor="minutes">Minutes</label>
          <input className="form-control" 
                type="number" 
                value = {this.state.minutes}
                onChange = {(event) => this.setState({ minutes: event.target.value })} />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    )
  }

}

export default WorkLogForm;