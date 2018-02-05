import React, { Component } from 'react';
import {Collapse} from '../src';
import Branch from './Branch';
import Seeds from './seeds';

class Tree extends Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
  }

  componentDidMount() {
    console.log(Collapse);
  }

  render() {
    const data = Seeds;

    return (
      <div className='tree'>
        <div className='inline-set'/>
        <div className='branch'>
          <Branch open={true} index={0} bubbleUp={(a,b)=>console.log(a,b)} data={Seeds}/>
        </div>
      </div>
    );
  }
}

export default Tree;
