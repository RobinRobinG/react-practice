import React from 'react';
import LogItem from './LogItem';

class LogCard extends React.Component {

  render () {
    const { title, log, totalTime} = this.props;
    let logs = log.map((item, index) => {
      const { description, minutes } = item;
      return <LogItem description = {description}
                      minutes = {minutes}
                      key = {index} />
    })
    return (
      <div className="card">
        <div className="card-title">{title} -  {totalTime}</div>
        <ul>
          {logs}
        </ul>
      </div>
    )
  }
}

export default LogCard;