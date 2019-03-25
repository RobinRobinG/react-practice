import React from 'react';

class Hint extends React.Component {

  render () {
    return (
      <div>
        <hr />
        {this.props.hint}
      </div>
    )
  }

}

export default Hint;