import React, { Component } from 'react';
import { Link } from 'react-router'
import MainTwo from './MainTwo';

class Brother extends Component {
  render() {
    return (
      <MainTwo text={"A week later " + window.name1 + " comes home, bruised and beaten by the same men that followed him. He managed to fight them off, this time. How do you respond?"} imgUrl="../assets/003_brotherbeat.png" cta1="You ignore" cta2="You call the police" oneLink="/Threat" twoLink="/Death3"/>
    );
  }
}

export default Brother;
