import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';
import {Collapse} from '../src';

class Branch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      heights: props.data.children ? props.data.children.map(c=>0) : []
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
    this.setState({
      open:!open
    })
    var adjust = !open ? data.children.length * 42 : 42;
    this.bubbleUp(adjust, this.props.index)

  }

  bubbleUp(adjust, i) {
    var heights = this.state.heights;
    heights[i] = adjust;
    console.log(this.props.data.name, ' ', adjust, ' ', heights, ' ', i);
    this.setState({
      heights
    })
    this.props.bubbleUp(heights.reduce((v, n)=>v+n, 0), this.props.index)
  }

  render() {
    const {
      open,
      data
    } = this.props;

    return (
      <Collapse
        isOpened={open} hasNestedCollapse={data.children && data.children.length > 0}>
        <Motion defaultStyle={{width: 0}} style={{width: spring(this.state.open ? 120 : 0)}}>
          {({width}) => (
            <div
              className={`node ${open ? 'open' : ''}`}
              style={{
                width: `${width}px`
              }}
              onClick={()=>data.children ? this.toggleOpen() : console.log('no children')}>
              <span className='title'>
                {data.name} {this.state.heights.reduce((v, n)=>v+n, 0)}
              </span>
              <div className='circle'/>

            </div>
          )}
        </Motion>
        <svg width={'100%'} height={'100%'} style={{position:'absolute', left: '10px', zIndex: -1}}>
          {this.state.open && data.children ? data.children.map((d, i)=>(
            <line key={`svg${i}`} x1={0} y1={data.children.length / 2 * 60} x2={120} y2={i * 60} style={{stroke:'#46AEBF', strokeWidth:3}} />
          )) : ''}
        </svg>


        <div className='branch'>
          {data.children ? data.children.map((d, i)=>(<Branch key={d.name} index={i} bubbleUp={(a, i)=>this.bubbleUp(a, i)} open={this.state.open} data={d}/>)) : ''}
        </div>
      </Collapse>
    );
  }
}

export default Branch;
