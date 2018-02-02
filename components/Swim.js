import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Swim extends Component {
  componentDidMount() {
    $('#swim').trigger("play");
      if (window.nextDeath = window.people.name1) {
        nextDeathOne()
      }
      else {
        nextDeathTwo()
      }
  }
  render() {
    return (
      <Main text= {[window.nextDeath +" is not a strong swimmer and is weak. The current takes them under. They bob up once, but only once",<sup><a href='https://books.google.com/books?id=PLOmAgAAQBAJ&pg=PT285&lpg=PT285&dq=drown+suchiate+river&source=bl&ots=5WRJ34eTpf&sig=Ya2zZdocPd8fi2XMngCX6WDKsrM&hl=en&sa=X&ved=0ahUKEwiZt6Pji4jZAhWI21MKHUmqDkcQ6AEIWzAL#v=snippet&q=river&f=false' target='_blank'>[14]</a></sup>,"."]} imgUrl="../assets/008b_drowning.png" nextLink="/Mexico"/>
    );
  }
}

export default Swim;

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
