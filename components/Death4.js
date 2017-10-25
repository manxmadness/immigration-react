import React, { Component } from 'react';
import { Link } from 'react-router'
import GameOver from './GameOver';

class Death4 extends Component {
  render() {
    return (
      <GameOver text="The tattooed men catch up to you and kill all of the members of your party." imgUrl="../assets/go.png"/>
    );
  }
}


export default Death4;
