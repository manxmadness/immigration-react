import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Submit extends Component {
  render() {
    return (
      <Main text="He leaves with your bag." imgUrl="../assets/submit.png" nextLink="/Walk"/>
    );
  }
}

export default Submit;
