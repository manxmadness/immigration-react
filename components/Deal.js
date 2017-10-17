import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Deal extends Component {
  render() {
    return (
      <Main text="The coyote approves of the deal and you successfully cross the border. " imgUrl="../assets/ph.png" nextLink="/Woman"/>
    );
  }
}

export default Deal;
