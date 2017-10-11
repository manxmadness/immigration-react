import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Clock extends Component {
  render() {
    return (
      <Main imgUrl="../assets/clock.png" nextLink="/Decision"/>
    );
  }
}

export default Clock;
