import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Take extends Component {
  componentDidMount() {
    $('#prop').trigger("play");
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
      <Main text={ window.text } imgUrl="../assets/Take.png" nextLink={ window.linkNew }/>
    );
  }
}
function nextDeathOne(){
  delete window.people.name1
  delete window.people.rel1
  window.nextDeath = window.people.name2
  window.linkNew = "/Coyote2"
  window.text = "You have no money, but " + window.nextDeath + " is able to strike up a deal. The coyote approves of the deal and you successfully cross the border, without " + window.nextDeath + ". To uphold the deal they are taken away to pay the coyote’s debt. They will live the rest of their life in servitude."
}
function nextDeathTwo(){
  delete window.people.name2
  delete window.people.rel2
  window.nextDeath = window.people.name3
  window.linkNew = "/Coyote2"
  window.text = "You have no money, but " + window.nextDeath + " is able to strike up a deal. The coyote approves of the deal and you successfully cross the border, without " + window.nextDeath + ". To uphold the deal they are taken away to pay the coyote’s debt. They will live the rest of their life in servitude."
}
function nextDeathThree(){
  delete window.people.name3
  delete window.people.rel3
  window.nextDeath = window.people.name4
  window.linkNew = "/Coyote2"
  window.text = "You have no money, but " + window.nextDeath + " is able to strike up a deal. The coyote approves of the deal and you successfully cross the border, without " + window.nextDeath + ". To uphold the deal they are taken away to pay the coyote’s debt. They will live the rest of their life in servitude."

}
function nextDeathFour(){
  delete window.people.name4
  delete window.people.rel4
  window.nextDeath = "you"
  window.linkNew = "/GoCoyote2"
  window.text = "You have no money, but you're able to strike up a deal. The coyote approves of the deal, but to uphold it, you are taken away to pay the coyote’s debt. You will live the rest of your life in sexual servitude."
}

export default Take;
