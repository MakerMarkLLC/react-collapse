import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import Flower from './Flower';
import CircularBranch from './CircularBranch';
import Seeds from './seeds';

class FlowerTree extends Component {
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
    const point = 2 + radius * 0.025;

    return (
      <div className='origin'>
        {sections.map((s, i)=>(
          <Flower
            x={radius*Math.cos(section*i).toFixed(2)}
            y={radius*Math.sin(section*i).toFixed(2)}
            radius={radius/2}
            origin={{
              x: 0,
              y: 0
            }}
            parentSection={section*i+Math.PI/2}
            sections={s.children || []}
            name={s.name}
            isOpen={open}/>
        ))}
        <div className='point' style={{
            left: -point,
            top: -point,
            width: `${2*point}px`,
            height: `${2*point}px`
          }}
          onClick={()=>{
            console.log('clicked ', !open);
            this.setState({open:!open})
          }}/>
      </div>
    );
  }
}

export default FlowerTree;
