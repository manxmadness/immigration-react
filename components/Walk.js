import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Walk extends Component {
  render() {
    return (
      <Main text="You keep walking. The sun is hot. Your party is thirsty and tired. You are all growing weary." imgUrl="../assets/ph.png" nextLink="/River"/>
    );
  }
}

export default Walk;
