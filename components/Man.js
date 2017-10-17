import React, { Component } from 'react';
import { Link } from 'react-router'
import MainTwo from './MainTwo';

class Man extends Component {
  render() {
    return (
      <MainTwo text="A man is met on the way, walking in the same direction. He soon punches you, hits your brother over the head with his walking stick. He pulls his knife and tells you to give him your bag." imgUrl="../assets/007_manwithknife.png" cta1="You submit." cta2="You fight." oneLink="/Submit" twoLink="/"/>
    );
  }
}

export default Man;
