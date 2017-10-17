import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Row extends Component {
  render() {
    return (
      <Main text="The next day you row over to the other side together." imgUrl="../assets/ph.png" nextLink="/Hike"/>
    );
  }
}


export default Row;
