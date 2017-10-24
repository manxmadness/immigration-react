import React, { Component } from 'react';
import { Link } from 'react-router'
import GameOver from './GameOver';

class GoCoyote2 extends Component {
  render() {
    return (
      <GameOver text="Rest in peace." imgUrl="../assets/go.png" nextLink="/"/>
    );
  }
}


export default GoCoyote2;
