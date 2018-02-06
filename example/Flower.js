import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
// import Branch from './Branch';
// import Seeds from './seeds';

class Flower extends Component {
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
      origin,
      parentSection
    } = this.props;
    const section = 2*Math.PI/sections.length;
    const point = 2 + radius * 0.025;

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
              <Flower
                x={radius*Math.cos(section*i+parentSection).toFixed(2)}
                y={radius*Math.sin(section*i+parentSection).toFixed(2)}
                parentSection={section}
                name={s.name}
                origin={{
                  x: style.x,
                  y: style.y
                }}
                radius={radius/2}
                sections={s.children || []}
                isOpen={open}/>
            ))}
            <svg
              title={name}
              width={`${radius* 2}px`}
              height={`${radius* 2}px`}
              style={{
                position:'absolute',
                overflow: 'visible',
                zIndex:-1
              }}>
              <line x1={-style.x} y1={-style.y} x2={0} y2={0} style={{stroke:'#333', strokeWidth:1}} />
            </svg>
            <div
              onClick={()=>this.setState({open:!open})}
              className='point'
              style={{
                left: -point,
                top: -point,
                width: `${2*point}px`,
                height: `${2*point}px`
              }}>
              <span>{name}</span>
            </div>
          </div>
        )}
      </Motion>
    );
  }
}

export default Flower;
