import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Raft extends Component {
  render() {
    return (
      <Main text="Together you decided to make a raft out of old tires and a few scraps of wood. This will take you a day to make." imgUrl="../assets/008a_raft.png" nextLink="/Row"/>
    );
  }
}


export default Raft;
