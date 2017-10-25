import React, { Component } from 'react';
import { Link } from 'react-router'
import GameOver from './GameOver';

class Death3 extends Component {
  render() {
    return (
      <GameOver text="On the way home, two officers stop you. You ask, ”Is there a problem, officers?” The sound of a blast echoes in your ears. The police car speeds off. You do not return home." imgUrl="../assets/go.png" nextLink="/"/>
    );
  }
}


export default Death3;