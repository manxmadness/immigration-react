import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';


class Pill extends Component {
  render() {
    return (
      <Main text={"Before you leave you, "+window.name2+", and "+window.name4+" take the pill. During your travels you may come across bad men that want more from you than you want to give. They may choose force, but that is part of the cost to a safe place."} imgUrl="../assets/005a_birthcontrol.png" nextLink="/Story3"/>
    );
  }
}

export default Pill;
