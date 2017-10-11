import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Member extends Component {
  render() {
    return (
      <Main text="The member gives you 2 choices—join, or be killed. You have until tomorrow to decide." imgUrl="../assets/ms13.png" nextLink="/Clock"/>
    );
  }
}


export default Member;
