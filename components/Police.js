import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Dad extends Component {
  render() {
    return (
      <Main text="They get your name and say they will look into it." imgUrl="../assets/dad.png" nextLink="/Death3"/>
    );
  }
}

export default Dad;
