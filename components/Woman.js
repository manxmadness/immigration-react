import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Woman extends Component {
  render() {
    return (
      <Main text="You meet another woman from around your area with her 13-year-old boy. They have tried to escape before to the north, to safety. She says she can try to help you along the way." imgUrl="../assets/012_womanandboy.png" nextLink="/Hop"/>
    );
  }
}


export default Woman;
