import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Traffick extends Component {
  render() {
    return (
      <Main text="They are now trafficking drugs for the man." imgUrl="../assets/004a_paymoney.png" nextLink="/Hop"/>
    );
  }
}

export default Traffick;
