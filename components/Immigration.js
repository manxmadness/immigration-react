import React, { Component } from 'react';
import { Link } from 'react-router'
import GameOver from './GameOver';

class Immigration extends Component {
  render() {
    return (
      <GameOver text="Immigration arrests all of you and you are sent back home." imgUrl="../assets/go.png" nextLink="/"/>
    );
  }
}


export default Immigration;
