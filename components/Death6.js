import React, { Component } from 'react';
import { Link } from 'react-router'
import GameOver from './GameOver';

class Death4 extends Component {
  render() {
    return (
      <GameOver text="You scream for help. To silence you, the man slits your throat. You bleed out." imgUrl="../assets/go.png" nextLink="/"/>
    );
  }
}


export default Death4;
