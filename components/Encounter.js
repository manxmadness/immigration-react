import React, { Component } from 'react';
import { Link } from 'react-router'
import MainTwo from './MainTwo';

class Encounter extends Component {
  render() {
    return (
      <MainTwo text={["Along the way you come across a group of men. One tells you that you have pretty face and then forces himself on you",<sup><a href='https://broadly.vice.com/en_us/article/evgg9j/i-didnt-have-anywhere-to-run-migrant-women-are-facing-a-rape-epidemic' target='_blank'>[15]</a></sup>,". What do you do?"]} imgUrl="../assets/009_threemen.png" cta1="Scream for help." cta2="Lay there silently until he finishes." oneLink="/Death6" twoLink="/Continue"/>
    );
  }
}


export default Encounter;
