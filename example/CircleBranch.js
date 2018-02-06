import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
// import Branch from './Branch';
// import Seeds from './seeds';

class CircleBranch extends Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
  }

  componentDidMount() {
    console.log(this.props.sections);
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

    const {
      sections,
      radius,
      x,
      y,
      isOpen,
      name,
      origin
    } = this.props;
    const section = 2*Math.PI/sections.length;

    return (
      <Motion style={{
          x: spring(isOpen ? x : 0),
          y: spring(isOpen ? y : 0),
          opacity: spring(isOpen ? 1 : 0)
        }}>
        {(style) => (
          <div
            className='origin'
            style={{
              left: style.x,
              top: style.y,
              opacity: style.opacity
            }}>
            {sections.map((s, i)=>(
              <CircleBranch
                x={radius*Math.cos(section*i).toFixed(2)}
                y={radius*Math.sin(section*i).toFixed(2)}
                name={s.name}
                origin={{
                  x: style.x,
                  y: style.y
                }}
                radius={radius/2}
                sections={s.children || []}
                isOpen={open}/>
            ))}
            {sections.map(s=>(
              <svg width={`${radius}px`} height={`${radius}px`} style={{position:'absolute'}}>
                <line x1={origin.x} y1={origin.y} x2={style.x} y2={style.y} style={{stroke:'#333', strokeWidth:1}} />
              </svg>
            ))}
            <div
              onClick={()=>this.setState({open:!open})}
              className='point'
              style={{
                left: 0,
                top: 0,
              }}>
              <span>{name}</span>
            </div>
          </div>
        )}
      </Motion>
    );
  }
}

export default CircleBranch;
