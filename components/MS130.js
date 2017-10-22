import React, { Component } from 'react';
import { Link } from 'react-router'
import MainTwo from './MainTwo';

class MS13 extends Component {
  render() {
    return (
      <MainTwo text="One of them harasses you, demands you be his girlfriend. He is relentless." imgUrl="../assets/ms13.png" cta1="Run home" oneLink="/Phone"/>
    );
  }
}

export default MS13;
