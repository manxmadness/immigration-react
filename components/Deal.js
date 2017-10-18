import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Deal extends Component {
  render() {
    return (
      <Main text={"You have no money, but "+ window.name2+" is able to strike up a deal. The coyote approves of the deal and you successfully cross the border, except for, "+ window.name2+". To uphold the deal he must stay behind, to live the rest of his life in servitude."} imgUrl="/assets/ph.png" nextLink="/Coyote2"/>
    );
  }
}

export default Deal;
