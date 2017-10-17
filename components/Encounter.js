import React, { Component } from 'react';
import { Link } from 'react-router'
import MainTwo from './MainTwo';

class Encounter extends Component {
  render() {
    return (
      <MainTwo text="Along the way you come across a group of men. One tells you that you have pretty face and then forces himself on you. What do you do?" imgUrl="../assets/009_threemen.png" cta1="Scream for help." cta2="Lay there silently until he finishes." oneLink="/" twoLink="/Story5"/>
    );
  }
}


export default Encounter;
