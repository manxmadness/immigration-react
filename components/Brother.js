import React, { Component } from 'react';
import { Link } from 'react-router'
import MainThree from './MainThree';

class Brother extends Component {
  render() {
    return (
      <MainThree text={"A week later " + window.people.name1 + " comes home, bruised and beaten by the same men that followed him. He managed to fight them off, this time. How do you respond?"} imgUrl="../assets/003_brotherbeat.png" cta1="You ignore" cta2="You ask your dad to confront them" cta3="You call the police" oneLink="/Threat" twoLink="/Dad" threeLink="/Death3"/>
    );
  }
}

export default Brother;
