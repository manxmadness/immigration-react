import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Dust extends Component {
  render() {
    return (
      <Main text="As you walk, you see a group of truck in the distance, kicking up clouds of dust.  Coming closer and closer. Is it help? Is it the help the coyote has sent?" imgUrl="../assets/Dust.png" nextLink="/Ice2"/>
    );
  }
}


export default Dust;
