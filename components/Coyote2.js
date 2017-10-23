import React, { Component } from 'react';
import { Link } from 'react-router'
import MainTwo from './MainTwo';

class Coyote2 extends Component {
  render() {
    return (
      <MainTwo text="You jump in the back of the coyote’s truck with others. It is important that you stay low so you are not seen. The coyote asks how far you would like to go?" imgUrl="../assets/Coyote2.png" cta1="All the way to the border" cta2="As far as he would recommend" oneLink="/All" twoLink="/Drop" />
    );
  }
}

export default Coyote2;
