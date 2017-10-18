import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Dad extends Component {
  render() {
    return (
      <Main text="Your dad never returns home." imgUrl="../assets/ph.png" nextLink="/Threat"/>
    );
  }
}

export default Dad;
