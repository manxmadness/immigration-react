import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Death extends Component {
  render() {
    return (
      <Main text= {window.name1 + " is murdered."} imgUrl="../assets/004_body.png" nextLink="/Decision2"/>
    );
  }
}

export default Death;
