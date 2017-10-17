import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Threat extends Component {
  render() {
    return (
      <Main text="Three days go by. A dead body of a boy your brother’s age and height is left outside the front of your home. A warning." imgUrl="../assets/004_body.png" nextLink="/Decision"/>
    );
  }
}

export default Threat;
