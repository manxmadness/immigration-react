import React, { Component } from 'react';
import { Link } from 'react-router'
import MainTwo from './MainTwo';

class Coyote extends Component {
  render() {
    return (
      <MainTwo text="The remains of your group arrive at the last train stop. You are approached by a coyote, as know as a human smuggler. That says he can help you cross the border, but for a price. You have no money." imgUrl="../assets/ph.png" cta1="You know you cannot afford the coyote and decline." cta2="You strike up a deal, agreeing to pay him back when you get across." oneLink="/" twoLink="/Deal" />
    );
  }
}

export default Coyote;
