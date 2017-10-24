import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Swim extends Component {
  componentDidMount() {
      if (window.people.name1 == undefined) {
        window.nextDeath = window.people.name2
        delete window.people.name2
        delete window.people.rel2
        nextDeathOne()

      }
      else {
        window.nextDeath = window.people.name1
        delete window.people.name1
        delete window.people.rel1
        nextDeathTwo()
      }
  }
  render() {
    return (
      <Main text= {window.nextDeath +" is not a strong swimmer and is weak. The current takes them under. They bob up once, but only once."} imgUrl="../assets/008b_drowning.png" nextLink="/Mexico"/>
    );
  }
}

export default Swim;

function nextDeathOne(){
  window.nextDeath = window.people.name3
  console.log("ran next death 1")
}
function nextDeathTwo(){
  window.nextDeath = window.people.name2
  console.log("ran next death 2")
}
