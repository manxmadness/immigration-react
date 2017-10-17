import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Story5 extends Component {
  render() {
    return (
      <Main text="At the end of the day, you finally reach the train in Tapachula, known to most as El Tren De La Muerte. Many have fallen of the train to their deaths or have been injured. Some have been pushed off. Other have been shot or stabbed on their passage." imgUrl="../assets/010_Train.png" nextLink="/Story6" />
    );
  }
}

export default Story5;
