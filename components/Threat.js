import React, { Component } from 'react';
import { Link } from 'react-router'
import MainTwo from './MainTwo';

class Threat extends Component {
  render() {
    return (
      <MainTwo text="Three days go by. A dead body of a boy your brother’s age and height is left outside the front of your home. A warning." imgUrl="../assets/004_body.png" cta1="It's time to leave." cta2="You ignore" cta3="You pay" oneLink="/Decision" twoLink="/Death" threeLink="/"/>
    );
  }
}

export default Threat;
