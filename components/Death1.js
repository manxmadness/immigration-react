import React, { Component } from 'react';
import { Link } from 'react-router'
import GameOver from './GameOver';

class Death1 extends Component {
  render() {
    return (
      <GameOver text="You are stabbed and left for dead." imgUrl="../assets/death1.png" nextLink="/"/>
    );
  }
}


export default Death1;
