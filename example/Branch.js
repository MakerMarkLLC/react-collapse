import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import {Collapse} from '../src';

class Branch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      heights: props.data.children ? props.data.children.map(c=>40) : [],
      height: 40,
      yPoints: props.data.children ? props.data.children.map(c=>21) : []
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.open && !nextProps.open) {
      this.setState({ open: false })
    }
  }

  toggleOpen() {
    const { open } = this.state;
    const { data } = this.props;
    var height = !open ? data.children.length * 40 : 40;
    var heights= this.props.data.children.map(c=>40);
    let y = 0;
    var yPoints= heights.map(h=>{
      y+=h;
      return y - (h/2)
    });
    this.setState({
      open:!open,
      height,
      heights,
      yPoints
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

  render() {
    const {
      open,
      data
    } = this.props;

    return (
      <Collapse
        isOpened={open} hasNestedCollapse={data.children && data.children.length > 0}>
        <Motion defaultStyle={{width: 0}} style={{width: spring(this.state.open ? 180 : 0)}}>
          {({width}) => (
            <div
              className={`node ${open ? 'open' : ''}`}
              style={{
                width: `${width}px`
              }}
              onClick={()=>data.children ? this.toggleOpen() : console.log('no children')}>
              <span className='title'>
                {data.name} {this.state.height}
              </span>
              <div className='circle'/>

            </div>
          )}
        </Motion>
        <Motion style={{width: spring(this.state.open ? 180 : 0), y1: spring(this.state.height / 2)}}>
          {({width, y1}) => (
            <svg width={'100%'} height={'100%'} style={{position:'absolute', left: '10px', zIndex: -1}}>
              {this.state.heights.map((h, i)=>(
                <line key={`svg${i}`} x1={0} y1={y1} x2={width} y2={this.state.yPoints[i]} style={{stroke:'#46AEBF', strokeWidth:3}} />
              ))}
            </svg>
          )}
        </Motion>


        <div className='branch'>
          {data.children ? data.children.map((d, i)=>(<Branch key={d.name} index={i} bubbleUp={(a, i)=>this.bubbleUp(a, i)} open={this.state.open} data={d}/>)) : ''}
        </div>
      </Collapse>
    );
  }
}

export default Branch;
