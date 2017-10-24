import React, { Component } from 'react';
import { Link } from 'react-router'
import GameOver from './GameOver';

class Death5 extends Component {
  render() {
    return (
      <GameOver text="You fight. Both of you fall to the ground, he stabs you. Your friends watch you bleed out." imgUrl="../assets/go.png" nextLink="/"/>
    );
  }
}


export default Death5;
