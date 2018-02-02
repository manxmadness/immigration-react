import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Fall extends Component {
  componentDidMount() {
    $('#train').trigger("play");
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
      <Main text={[window.nextDeath + " gets tired and falls off the side of the train",<sup><a href='http://www.sandiegouniontribune.com/news/border-baja-california/sdut-la-bestia-victims-2016jun27-story.html' target='_blank'>[17]</a></sup>,"."]} imgUrl="../assets/011a_Thrown.png" nextLink="/Zetas"/>
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
function nextDeathFour(){
  delete window.people.name4
  delete window.people.rel4
  window.nextDeath = "you"
  window.linkNew = "/GoCoyote2"
  window.text = "The train slows down. You do not hide. Two members of Los Zetas board the train and take you."
}


export default Fall;
