import React, { Component } from 'react';
import { Link } from 'react-router'
import MainTwo from './MainTwo';

class Money extends Component {
  render() {
    return (
      <MainTwo text={["You don\u0027t have enough money for a coyote",<sup><a href='https://en.wikipedia.org/wiki/Coyotaje' target='_blank'>[10]</a></sup>,", but you have enough to see how far a taxi will get you. How would you like to proceed?"]} imgUrl="../assets/money.png" cta1="Get a taxi" cta2="Take the bus to save money" oneLink="/Taxi" twoLink="/Stops"/>
    );
  }
}

export default Money;
