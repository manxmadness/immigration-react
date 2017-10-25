import React, { Component } from 'react';
import { Link } from 'react-router'
import GameOver from './GameOver';

class Sent extends Component {
  render() {
    return (
      <GameOver text="You are sent back home." imgUrl="../assets/go.png"/>
    );
  }
}


export default Sent;
