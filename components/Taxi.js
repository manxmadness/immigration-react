import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Taxi extends Component {
  render() {
    return (
      <Main text="You give the taxi driver all the money you have." imgUrl="../assets/006_Taxi.png" nextLink="/Mid"/>
    );
  }
}


export default Taxi;
