import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Bus extends Component {
  render() {
    return (
      <GameOver text="The tattooed men catch up to you. You are ambushed and killed." imgUrl="../assets/001a_confront.png" nextLink="/"/>

    );
  }
}

export default Bus;
