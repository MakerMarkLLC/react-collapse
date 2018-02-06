import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import CircleBranch from './CircleBranch';
import Seeds from './seeds';

class CircleTree extends Component {
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
      radius,
      sections
    }))
    return points;
  }

  render() {
    const {
      open
    } = this.state;


    const sections = Seeds.children;
    const radius = 300;
    const x = 0;
    const y = 0;
    const section = 2*Math.PI/sections.length;

    return (
      <div className='origin'>
        {sections.map((s, i)=>(
          <CircleBranch
            x={radius*Math.cos(section*i).toFixed(2)}
            y={radius*Math.sin(section*i).toFixed(2)}
            radius={radius/2}
            origin={{
              x: 0,
              y: 0
            }}
            sections={s.children || []}
            name={s.name}
            isOpen={open}/>
        ))}
        <div className='point' style={{
            left:x,
            top:y
          }} onClick={()=>{
            console.log('clicked ', !open);
            this.setState({open:!open})
          }}/>
      </div>
    );
  }
}

export default CircleTree;
