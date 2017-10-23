import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Across extends Component {
  render() {
    return (
      <Main text="You have crossed the border." imgUrl="/assets/ph.png" nextLink="/Customs"/>
    );
  }
}

export default Across;
