import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class MS13 extends Component {
  render() {
    return (
      <Main text="MS13, or Mara Salvatrucha, is one of the country’s two main street gangs. You have heard that women are often initiated into a gang through either a beating, or through rape." imgUrl="../assets/ms13.png" nextLink="/Member"/>
    );
  }
}

export default MS13;
