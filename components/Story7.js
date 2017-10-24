import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Story7 extends Component {
  componentDidMount() {
      if (window.nextDeath == window.people.name1) {
        // window.nextDeath = window.people.name2
        // delete window.people.name2
        // delete window.people.rel2
        nextDeathOne()
      }
      else if (window.nextDeath == window.people.name2) {
        // window.nextDeath = window.people.name1
        // delete window.people.name1
        // delete window.people.rel1
        nextDeathTwo()
      }
      else if (window.nextDeath == window.people.name3){
        nextDeathThree()
      }
      else {
        nextDeath()
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
  console.log("ran next death 1")
}
function nextDeathTwo(){
  delete window.people.name2
  delete window.people.rel2
  window.nextDeath = window.people.name3
  console.log("ran next death 2")
}
function nextDeathThree(){
  delete window.people.name3
  delete window.people.rel3
  window.nextDeath = window.people.name4
  console.log("ran next death 3")
}
function nextDeath(){
  window.nextDeath = window.people.name1
  console.log("ran next death")
}
export default Story7;
