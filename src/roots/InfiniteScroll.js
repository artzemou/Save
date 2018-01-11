

import React, { Component } from 'react';

import InfiniteScroll from '../components/InfiniteScroll.js'



export default class RootToInfiniteScroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : []
    }
  }

  render() {
    const jsonPath = '/json/InfiniteScroll.json'
    return (
      <div className="container">
        <InfiniteScroll jsonPath={jsonPath}/>
      </div>
    )
  }
}
