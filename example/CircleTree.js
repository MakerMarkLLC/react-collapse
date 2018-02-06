import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import CircularBranch from './CircularBranch';
import Seeds from './seeds';

class CircleTree extends Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
  }

  componentDidMount() {
    console.log(this.circlePoints(200, 5));
  }

  circlePoints(sections, height) {
    var radius = sections * (height/2)
    var dif = (sections-1) / 2 * height;
    var points = Array.from({length:sections}, (e, i)=>{
      console.log(Math.pow(i*height-dif, 2), dif, i*height);
      return {
        x: Math.sqrt(Math.pow(radius, 2) - Math.pow((i*height)-dif, 2)),
        y: (i*height)-dif,
      }

    })
    return points;
  }

  render() {
    const {
      open
    } = this.state;

    const height = 40;
    const x = 0;
    const y = 0;
    const sections = Seeds.children;
    const length = sections.length;
    const radius = length * (height/2);
    const dif = (length-1) / 2 * height;
    const section = 2*Math.PI/sections.length;
    const point = 2 + radius * 0.025;

    return (
      <div className='origin'>
        {this.circlePoints(sections.length, height).map((s, i)=>(
          <CircularBranch
            x={s.x}
            y={s.y}
            radius={radius}
            height={height}
            sections={sections[i].children || []}
            name={sections[i].name}
            isOpen={open}/>
        ))}
        <div className='point' style={{
            left: -point,
            top: -point,
            width: `${2*point}px`,
            height: `${2*point}px`
          }} onClick={()=>{
            console.log('clicked ', !open);
            this.setState({open:!open})
          }}/>
      </div>
    );
  }
}

export default CircleTree;
