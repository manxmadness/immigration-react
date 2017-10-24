import React, { Component } from 'react';
import { Link } from 'react-router'
import GameOver from './GameOver';

class Death1 extends Component {
  render() {
    return (
      <GameOver text="Suddenly you feel hot blow, another and then another. You feel tired and collapse to the ground. Stabbed, left on the corner. Slowly your vision fades to black." imgUrl="../assets/death1.png" nextLink="/"/>
    );
  }
}


export default Death1;
