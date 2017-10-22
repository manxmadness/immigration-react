import React, { Component } from 'react';
import { Link } from 'react-router'
import MainThree from './MainThree';

class Response2 extends Component {
  render() {
    return (
      <MainThree text="How do you respond?" imgUrl="../assets/002_phonecalls.png" cta1="You ignore the threats." cta2="You pay up." cta3="You change your number" oneLink="/Brother" twoLink="/" threeLink="/Phone2"/>
    );
  }
}

export default Response2;
