import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Story7 extends Component {
  componentDidMount() {
    $('#cross').trigger("play");
      if (window.nextDeath = window.people.name1) {
        nextDeathOne()

      }
      else if (window.nextDeath = window.people.name2) {
        nextDeathTwo()
      }
      else {
        nextDeathThree()
      }
  }

  render() {
    return (
      <Main text={window.nextDeath + " is thrown off. You see their still body grow smaller in the distance."} imgUrl="../assets/011a_Thrown.png" nextLink="/Hop" />
    );
  }
}
function nextDeathOne(){
  delete window.people.name1
  delete window.people.rel1
  window.nextDeath = window.people.name2
  window.linkNew = "/Coyote"
  window.text = "The train slows down. Your group does not hide. Two members of Los Zetas board the train and take " + window.nextDeath + "."
}
function nextDeathTwo(){
  delete window.people.name2
  delete window.people.rel2
  window.nextDeath = window.people.name3
  window.linkNew = "/Coyote"
  window.text = "The train slows down. Your group does not hide. Two members of Los Zetas board the train and take " + window.nextDeath + "."
}

function nextDeathThree(){
  delete window.people.name3
  delete window.people.rel3
  window.nextDeath = window.people.name4
  window.linkNew = "/Coyote"
  window.text = "The train slows down. Your group does not hide. Two members of Los Zetas board the train and take " + window.nextDeath + "."
}

export default Story7;
