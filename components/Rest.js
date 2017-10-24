import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Rest extends Component {
  render() {
    return (
      <Main text="You see in the distance a taxi that resembled the one you took, followed by a truck. The caravan approaches. The tattooed men have caught up to your party, with the help of the taxi driver." imgUrl="../assets/ph.png" nextLink="/Bus"/>
    );
  }
}


export default Rest;
