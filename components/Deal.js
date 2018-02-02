import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Deal extends Component {
  componentDidMount() {
    $('#accepts').trigger("play");
    if (window.nextDeath == window.people.name1) {
      nextDeathOne()
    }
    else if (window.nextDeath == window.people.name2) {
      nextDeathTwo()
    }
    else if (window.nextDeath == window.people.name3){
      nextDeathThree()
    }
    else {
      nextDeathFour()
    }
  }

  render() {
    return (
      <Main text={ window.text } imgUrl="../assets/Deal.png" nextLink={window.linkNew}/>
    );
  }
}
function nextDeathOne(){
  delete window.people.name1
  delete window.people.rel1
  window.nextDeath = window.people.name2
}
function nextDeathTwo(){
  delete window.people.name2
  delete window.people.rel2
  window.nextDeath = window.people.name3
}
function nextDeathThree(){
  delete window.people.name3
  delete window.people.rel3
  window.nextDeath = window.people.name4

}
function nextDeathFour(){
  delete window.people.name4
  delete window.people.rel4
  window.nextDeath = "you"

}
export default Deal;
