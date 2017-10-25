import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Dad extends Component {
  render() {
    return (
      <Main text="They get your name and say they will look into it." imgUrl="../assets/003a_callpolice.png" nextLink="/Death3"/>
    );
  }
}

export default Dad;
