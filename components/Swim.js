import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Swim extends Component {
  render() {
    return (
      <Main text= {window.people.name1 +" is not a strong swimmer and is weak. The current takes them under. They do not return."} imgUrl="../assets/008b_drowning.png" nextLink="/Mexico"/>
    );
  }
}

export default Swim;
