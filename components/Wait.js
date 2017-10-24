import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';


class Wait extends Component {
  render() {
    return (
      <Main text="The desert becomes cold in the evening and brings rain. You are without shelter. It is the coldest you have ever been." imgUrl="../assets/Wait.png" nextLink="/" />
    );
  }
}

export default Wait;
