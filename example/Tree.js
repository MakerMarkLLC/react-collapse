import React, { Component } from 'react';
import Branch from './Branch';
import Seeds from './seeds';

class Tree extends Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
  }

  componentDidMount() {
    console.log(this.circlePoints(10, 10));
  }

  circlePoints(radius, sections) {
    var section = 2*Math.PI/sections;
    var points = Array.from({length:sections}, (e, i)=>({
      x: radius*Math.cos(section*i).toFixed(2),
      y: radius*Math.sin(section*i).toFixed(2),
    }))
    return points;
  }

  render() {
    const data = Seeds;

    return (
      <div className='tree'>
        <div className='inline-set'/>
        <div className='branch'>
          <Branch open={true} index={0} bubbleUp={(a,b)=>console.log(a,b)} data={data}/>
        </div>
      </div>
    );
  }
}

export default Tree;
