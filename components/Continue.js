import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Continue extends Component {
  render() {
    return (
      <Main text="Broken, dark and feeling exposed your helps you get back on your feet and continue." imgUrl="../assets/ph.png" nextLink="/Story5"/>
    );
  }
}


export default Continue;
