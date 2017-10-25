import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Death extends Component {
  componentDidMount() {
    nextDeath()
  }
  render() {
    return (
      <Main text= {window.nextDeath + " is murdered."} imgUrl="../assets/004_body.png" nextLink="/Decision2"/>
    );
  }
}

function nextDeath() {
    delete window.people.name1
    delete window.people.rel1
    window.nextDeath =  window.people.name2
    window.linkNew = "/Coyote"
    window.text = "The train slows down. Your group does not hide. Two members of Los Zetas board the train and take " + window.nextDeath + "."
}
 
export default Death;
