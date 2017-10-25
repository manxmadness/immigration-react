import React, { Component } from 'react';
import { Link } from 'react-router'
import GameOver from './GameOver';

class Bus extends Component {
  render() {
    return (
      <GameOver text="The tattooed men catch up to you. You are ambushed and killed." imgUrl="../assets/go.png"/>

    );
  }
}

export default Bus;
