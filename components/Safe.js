import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Safe extends Component {
  render() {
    return (
      <Main text="Your party is able to stay on the train without injury" imgUrl="../assets/Safe.png" nextLink="/Zetas"/>
    );
  }
}


export default Safe;
