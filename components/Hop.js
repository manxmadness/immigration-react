import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Woman extends Component {
  render() {
    return (
      <Main text="You hold on tight to ________. They hold on tight to_______. For the 1450-mile undertaking you all jump from one moving train to another to another to another. Growing tired you lose count, but it’s somewhere between 10 and 15." imgUrl="../assets/012a_trainjump.png" nextLink="/Safe"/>
    );
  }
}


export default Woman;
