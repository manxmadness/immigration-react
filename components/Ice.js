import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Ice extends Component {
  render() {
    return (
      <Main text="Immigration and Customs Enforcement comes are you are arrested." imgUrl="../assets/ph.png" nextLink="/Sent" />
    );
  }
}

export default Ice;
