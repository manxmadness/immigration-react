import React, { Component } from 'react';
import { Link } from 'react-router'
import GameOver from './GameOver';

class Death3 extends Component {
  render() {
    return (
      <GameOver text="In El Salvador, the police are corrupt. They inform the gang you called. The gang kills you." imgUrl="../assets/go.png" nextLink="/"/>
    );
  }
}


export default Death3;
