import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Brother extends Component {
  render() {
    return (
      <Main text="A week later, your brother comes home, bruised and beaten by the same men that followed you. He managed to fight them off, this time." imgUrl="../assets/ph.png" nextLink="/Threat"/>
    );
  }
}

export default Brother;
