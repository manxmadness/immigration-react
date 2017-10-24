import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Heat extends Component {
  render() {
    return (
      <Main text="Your party sets off again into the heat." imgUrl="../assets/walk.png" nextLink="/Death7"/>
    );
  }
}

export default Heat;
