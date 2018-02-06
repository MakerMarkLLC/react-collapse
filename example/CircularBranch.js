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
      points: props.sections.map((p,i)=>({
        x: Math.sqrt(Math.pow(this.radius, 2) - Math.pow((i*props.height-this.dif), 2)),
        y: (i*props.height-this.dif),
      })),
    }
  }


    toggleOpen() {
      const { open } = this.state;
      const { sections } = this.props;
      var height = !open ? sections.length * this.props.height : this.props.height;
      var heights = sections.map(c=>this.props.height);
      let y = 0;
      var yPoints= heights.map(h=>{
        y+=h;
        return y - (h/2)
      });
      this.setState({
        open:!open,
        height,
        heights,
        points: props.sections.map((p,i)=>({
          x: Math.sqrt(Math.pow(this.radius, 2) - Math.pow((i*props.height-this.dif), 2)),
          y: (i*props.height-this.dif),
        }))
      })
      this.props.bubbleUp(height, this.props.index)

    }

    bubbleUp(adjust, i) {
      var heights = this.state.heights;
      heights[i] = adjust;
      console.log(this.props.data.name, ' ', adjust, ' ', heights, ' ', i);
      var height = heights.reduce((v, n)=>v+n, 0) || 40;
      let y = 0;
      var yPoints= heights.map(h=>{
        y+=h;
        return y - (h/2)
      });
      this.setState({
        heights,
        height,
        yPoints
      })
      this.props.bubbleUp(height, this.props.index)
    }


  circlePoints() {
    const {sections, height} = this.props;
    const {length} = sections;
    var radius = length * (height/2)
    var dif = (length-1) / 2 * height;
    var points = Array.from({length}, (e, i)=>{
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

    const {
      sections,
      x,
      y,
      height,
      isOpen,
      name
    } = this.props;

    const length = sections.length;
    const radius = length * (height/2);
    const dif = (length-1) / 2 * height;
    const section = 2*Math.PI/sections.length;
    const point = 4;

    return (
      <Motion style={{
          x: spring(isOpen ? open ? x + radius : x : 0),
          y: spring(isOpen ? open ? y + this.state.height : y : 0),
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

export default CircularBranch;
