import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Stops extends Component {
  render() {
    return (
      <Main text="The bus stops on a bus corner on the usual route. Two tattooed faced men board." imgUrl="../assets/001a_confront.png" nextLink="/Bus"/>
    );
  }
}


export default Stops;
