import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Take extends Component {
  render() {
    return (
      <Main text="The train slows down. Your group hides. Two members of Los Zetas board but did not find you, but has taken five teen girls." imgUrl="../assets/Take.png" nextLink="/Coyote"/>
    );
  }
}

export default Take;
