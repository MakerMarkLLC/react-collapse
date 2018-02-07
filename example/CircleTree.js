import React, { Component } from 'react';
import CircularBranch from './CircularBranch';
import Seeds from './seeds';

class CircleTree extends Component {
  constructor(props) {
    super(props)
    this.state = {
      descLen: 1
    }
  }

  render() {
    const {descLen} = this.state;
    const height = descLen * 40;

    return (
      <div style={{
          marginLeft:'20px',
          height: `${height*2}px`,
          position:'relative'
        }}>
        <div className='origin' style={{
            left:'20px'
          }}>
          <CircularBranch
            x={0}
            y={0}
            radius={300}
            height={40}
            index={0}
            descendants={(descLen)=>this.setState({descLen: descLen || 1})}
            sections={Seeds.children}
            name={''}
            isOpen={true}/>
        </div>
      </div>
    );
  }
}

export default CircleTree;
