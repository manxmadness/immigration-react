import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Raft extends Component {
  render() {
    return (
      <Main text="Together you decided to make a raft out of old tires and a few scraps of wood. This will take you a day to make. The next day you row over to the other side together." imgUrl="../assets/008a_raft.png" nextLink="/Mexico"/>
    );
  }
}


export default Raft;
