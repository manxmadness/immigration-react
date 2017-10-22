import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Phone extends Component {
  render() {
    return (
      <Main text="Death threats started soon after. Anonymous phone calls at all hours. A gruff voice at the other end, “Give me $400 by the end of the week or you and your family die.”" imgUrl="../assets/002_phonecalls.png" nextLink="/Response2"/>
    );
  }
}


export default Phone;
