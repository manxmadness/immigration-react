import React, { Component } from 'react';
import { Link } from 'react-router'
import GameOver from './GameOver';

class Death7 extends Component {
  render() {
    return (
      <GameOver text="Sweaty, thirsty and alone you die of heat exhaustion." imgUrl="../assets/walk.png"/>
    );
  }
}


export default Death7;
