import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Run extends Component {
  render() {
    return (
      <Main text="You are not caught, but others are." imgUrl="../assets/Run.png" nextLink="/America"/>
    );
  }
}


export default Run;
