import React, { Component } from 'react';
import { Link } from 'react-router'
import MainThree from './MainThree';

class Threat extends Component {
  render() {
    return (
      <MainThree text={"Three days go by. A dead body of a boy " + window.name1 + "’s age and height is left outside the front of your home. A warning."} imgUrl="../assets/004_body.png" cta1="It's time to leave." cta2="You ignore" cta3="You pay" oneLink="/Flee" twoLink="/Death" threeLink="/Death2"/>
    );
  }
}

export default Threat;
