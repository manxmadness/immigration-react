import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class America extends Component {
  render() {
    return (
      <Main text="Congratulations you’ve made it to America, the land of the free." imgUrl="../assets/America.png" nextLink="/Dust"/>
    );
  }
}


export default America;
