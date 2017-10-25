import React, { Component } from 'react';
import { Link } from 'react-router'
import GameOver from './GameOver';

class Death6 extends Component {
  render() {
    return (
      <GameOver text="You plead. You scream for help, for the others to find you, for anyone to find you. Your attacker leaves, but you are unable to sit up. Idly you absorb the trauma and begin to swallow the pain. Everything fades to black." imgUrl="../assets/go.png"/>
    );
  }
}


export default Death6;
