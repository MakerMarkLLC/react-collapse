import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
// import Branch from './Branch';
// import Seeds from './seeds';

class CircularBranch extends Component {
  constructor(props) {
    super(props)
    this.length = props.sections.length;
    this.radius = this.length * (props.height/2);
    this.dif = (this.length-1) / 2 * props.height;
    this.state = {
      open: false,
      height: props.height,
      heights: props.sections.map(s=>props.height),
      descendants: [],
      points: props.sections.map((p,i)=>({
        x: Math.sqrt(Math.pow(this.radius, 2) - Math.pow((i*props.height-this.dif), 2)),
        y: (i*props.height-this.dif),
      })),
    }
  }


  toggleOpen() {
    const { open } = this.state;
    const { sections, index } = this.props;
    const descendants = !open ? sections.map(s=>1) : [];
    const descLen = descendants.reduce((v, n)=>v+n, 0) || 1;

    this.setState({
      open:!open,
      descendants,
      descLen
    })

    this.props.descendants(descLen, index)

  }

  bubbleUp(adjust, i) {
    console.log('bubble ',this.props.name, adjust, i);
    const { descendants } = this.state;
    const { index } = this.props;
    descendants[i] = adjust;
    const descLen = descendants.reduce((v, n)=>v+n, 0);

    this.setState({
      descendants,
      descLen
    })

    this.props.descendants(descLen, index)
  }

  render() {
    const {
      open,
      descLen
    } = this.state;

    const {
      sections,
      x,
      y,
      height,
      isOpen,
      name,
      parentDif
    } = this.props;

    const length = sections.length;
    const radius = descLen * (height/2);
    const section = 2*Math.PI/sections.length;
    const point = 4;

    return (
      <Motion style={{
          x: spring(isOpen ? open && descLen ? x * descLen : x : 0),
          y: spring(isOpen ? open && descLen ? y * descLen : y : 0),
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
            {this.state.points.map((s, i)=>(
              <CircularBranch
                x={s.x}
                y={s.y}
                radius={radius}
                height={height}
                index={i}
                descendants={(l, j)=>this.bubbleUp(l, j)}
                sections={sections[i].children || []}
                name={sections[i].name}
                isOpen={open}/>
            ))}
            <svg
              title={name}
              width={`${this.props.radius* 2}px`}
              height={`${this.props.radius* 2}px`}
              style={{
                position:'absolute',
                overflow: 'visible',
                zIndex:-1
              }}>
              <line x1={-style.x} y1={-style.y} x2={0} y2={0} style={{stroke:'#333', strokeWidth:1}} />
            </svg>
            <div
              onClick={()=>this.toggleOpen()}
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

export default CircularBranch;
