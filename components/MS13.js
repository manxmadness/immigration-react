import React, { Component } from 'react';
import { Link } from 'react-router'
import MainTwo from './MainTwo';

class MS13 extends Component {
  render() {
    return (
      <MainTwo text="Based on his tattoos, you guess he's a member of MS13, or Mara Salvatrucha. He harasses you, demands you be his girlfriend. He is relentless." imgUrl="../assets/ms13.png" cta1="Run home" oneLink="/Member"/>
    );
  }
}

export default MS13;
