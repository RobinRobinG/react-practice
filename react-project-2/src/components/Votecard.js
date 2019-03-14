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

const App = (props) => {
  return (
      <div>
        <Votecard title = "React" message = "You voted for React!"/>
        <Votecard title = "Vue" message = "You voted for Vue!"/>
        <Votecard title = "Angular" message = "You voted for Angular!"/>
        <Votecard title = "Ember" message = "You voted for Ember!"/>
      </div>
  );
};

export default App;