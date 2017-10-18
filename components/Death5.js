import React, { Component } from 'react';
import { Link } from 'react-router'
import GameOver from './GameOver';

class Death4 extends Component {
  render() {
    return (
      <GameOver text="The man stabs you, and you bleed out." imgUrl="../assets/go.png" nextLink="/"/>
    );
  }
}


export default Death4;
