import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';


class Pill extends Component {
  render() {
    return (
      <Main text="Along the way, you pass through many areas ruled by Los Zetas, one of the most dangerous drug cartels. Los Zetas have been known to board the train kidnapping riders." imgUrl="../assets/013_Zetas.png" nextLink="/Take"/>
    );
  }
}

export default Pill;
