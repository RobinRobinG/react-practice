import React from 'react';
import LogItem from './LogItem';

class LogCard extends React.Component {

  render () {
    const { title, log, totalTime} = this.props;
    let logs = log.map((item, index) => {
      const { description, minutes, id } = item;
      return <LogItem description = {description}
                      minutes = {minutes}
                      key = {index}
                      id = {id}
                      handleDelete = { (id) => this.reduceItems(id) } />
    })
    return (
      <div className="card">
        <div className="card-body">
          <div className="card-title d-flex justify-content-between">
            <div>{title}</div>
            <div>Total Time: {totalTime} min</div>
          </div>
          <ul>
            {logs}
          </ul>
        </div>
      </div>
    )
  }
}

export default LogCard;