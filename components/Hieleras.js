import React, { Component } from 'react';
import { Link } from 'react-router'
import GameOver from './GameOver';

class Hieleras extends Component {
  render() {
    return (
      <GameOver text={["You are arrested and sent to detainment cells called, “hieleras” or “iceboxes,” where immigrants are locked until deported",<sup><a href='https://www.nilc.org/issues/immigration-enforcement/hieleras/' target='_blank'>[21]</a></sup>,"."]} imgUrl="../assets/go.png"/>
    );
  }
}


export default Hieleras;
