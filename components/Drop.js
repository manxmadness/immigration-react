import React, { Component } from 'react';
import { Link } from 'react-router'
import MainTwo from './MainTwo';


class Drop extends Component {
  render() {
    return (
      <MainTwo text="The coyote leaves your party a mile from the border. He says another party will be there tomorrow with a raft. You can see the Rio Grande and America in the distance and walk to the river. It is not as big as you imagined. How will you proceed?" imgUrl="../assets/drop.png" cta1="You walk across." cta2="You decide to wait for the party." oneLink="/Across" twoLink="/Wait" />
    );
  }
}

export default Drop;
