import React from 'react';
import Votecard from 'components/Votecard';

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