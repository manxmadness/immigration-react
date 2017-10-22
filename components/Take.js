import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Take extends Component {
  render() {
    return (
      <Main text={"The train slows down. Your group does not hide. Two members of Los Zetas board the train and take " + window.name4 + "."} imgUrl="../assets/Take.png" nextLink="/Coyote"/>
    );
  }
}

export default Take;
