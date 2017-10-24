import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Deal extends Component {
  render() {
    return (
      <Main text={"You have no money, but " + window.people.name2 + " is able to strike up a deal. The coyote approves of the deal and you successfully cross the border, without " + window.people.name2+ ". To uphold the deal she is taken away to pay the coyote’s debt. She will live the rest of her life in sexual servitude."} imgUrl="/assets/Deal.png" nextLink="/Coyote2"/>
    );
  }
}

export default Deal;
