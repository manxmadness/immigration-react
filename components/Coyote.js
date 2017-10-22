import React, { Component } from 'react';
import { Link } from 'react-router'
import MainTwo from './MainTwo';

class Coyote extends Component {
  render() {
    return (
      <MainTwo text="The remains of your group arrive at the last train stop. You are approached by a coyote, also know as a human smuggler, that says he can help you cross the border, but for a price. You have no money." imgUrl="../assets/Coyote.png" cta1="You know you cannot afford the coyote and decline." cta2="Try to strike up a deal" oneLink="/" twoLink="/Deal" />
    );
  }
}

export default Coyote;
