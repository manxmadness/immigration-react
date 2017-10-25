import React, { Component } from 'react';
import { Link } from 'react-router'
import GameOver from './GameOver';

class Death2 extends Component {
  render() {
    return (
      <GameOver text="You live another week, but the men want more. You don\u0027t have any more money to give them so they kill you." imgUrl="../assets/go.png"/>
    );
  }
}


export default Death2;
