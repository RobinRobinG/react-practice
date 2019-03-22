import React from 'react';


class Counter extends React.Component {
  constructor (props) {
    console.log('constructor');
    super(props);
    this.state =  {
      counter: 0,
      seed: 0,

    }
    this.increment = () => {
      this.setState({ counter: this.state.counter + 1 })
    }
    this.decrement = () => {
      this.setState({ counter: this.state.counter - 1 })
    }
  }

  static getDerivedStateFromProps(props, state) {
    if(props.seed && state.seed !== props.seed ) {
      return {
        seed: props.seed,
        counter: props.seed
      }
    }
    return null
  }

  //this method gets run after the component is initialized.
  componentDidMount () {
    console.log('component did mount');
    console.log('--------------------');
  } 
  componentWillUnmount () {
    console.log('component will unmount');
    console.log('--------------------');
  }
  //this method runs after every render
  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log('component did update');
    console.log('snapshot:', snapshot);
    console.log('-----------------------')
  }

  shouldComponentUpdate (nextProps, nextState) {
    if ( nextProps.ignoreProp && this.props.ignoreProp !== nextProps.ignoreProp) {
      console.log('Should component update -- DO NOT RENDER');
      console.log('--------------------');
      return false
    }
    console.log('Should component update -- RENDER');
    console.log('--------------------');
    return true
  }
  
  getSnapshotBeforeUpdate (prevProps, prevState) {
    console.log('get snapshot before update');
    console.log('prevProps:', prevProps);
    console.log('prevState:', prevState);
    console.log('--------------------');
    return prevProps
  }

  componentDidCatch (error, info) {
    console.log('component did catch');
    this.setSate({error, info})
  }

  //component render method - all the component need this render method
  render () {
    console.log('render');

    return (
      <div>
        <div className="buttons">
          <button onClick= {this.increment}>increment</button>
          <button onClick= {this.decrement}>decrement</button>
        </div>
        <div className="counter">
          Counter: {this.state.counter} 
        </div>
      </div>
    )
  }
}

export default Counter;