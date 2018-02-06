import React, { Component } from 'react';
import CircleTree from './CircleTree';
import FlowerTree from './FlowerTree';
import Tree from './Tree';

class App extends Component {
  constructor() {
    super()
    this.state = {
      view: 'tree'
    }
  }

  render() {
    const {view}=this.state;

    return (
      <div className='app'>
        <button onClick={()=>this.setState({view:'tree'})}>
          tree
        </button>
        <button onClick={()=>this.setState({view:'circle'})}>
          circle
        </button>
        <button onClick={()=>this.setState({view:'flower'})}>
          flower
        </button>
        {view == 'tree' ? (
          <Tree/>
        ) : view == 'circle' ? (
          <CircleTree/>
        ) : (
          <FlowerTree/>
        )}
      </div>
    );
  }
}

export default App;
