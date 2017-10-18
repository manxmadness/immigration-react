import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Phone2 extends Component {
  render() {
    return (
      <Main text="The calls stop for a little bit, but they eventually find your new number and continue to bombard you with calls." imgUrl="../assets/002_phonecalls.png" nextLink="/Brother"/>
    );
  }
}


export default Phone2;
