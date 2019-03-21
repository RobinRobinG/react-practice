import React from 'react';

const Votecard = (props) => {
  return (
    <div className = "votecard d-flex justify-content-between">
      <div className = "item">
        <div className = "count">#</div>
      </div>
      <div className = "item">
        <h1>{props.title}</h1>
      </div>
      <div className = "item">
        <button onClick={()=> alert(props.message)}>+</button>
      </div>
    </div>
  );
};

export default Votecard;