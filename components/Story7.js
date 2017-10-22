import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Story7 extends Component {
  render() {
    return (
      <Main text={window.name1 + " is thrown off. You are unable to stop the train and you never see them again."} imgUrl="../assets/011a_Thrown.png" nextLink="/Hop" />
    );
  }
}

export default Story7;
