import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Deal extends Component {
  componentDidMount() {
    if (window.nextDeath == "you") {
      window.linkNew = "/GoCoyote2"
      window.text = "You have no money, but you're is able to strike up a deal. The coyote approves of the deal, but to uphold it, you are taken away to pay the coyote’s debt. You will live the rest of your life in sexual servitude."
      console.log("Death is you")
    } else {
      window.linkNew = "/Coyote2"
      window.text = "You have no money, but " + window.nextDeath + " is able to strike up a deal. The coyote approves of the deal and you successfully cross the border, without " + window.nextDeath + ". To uphold the deal she is taken away to pay the coyote’s debt. She will live the rest of her life in sexual servitude."
      console.log("Death isn;t you")
    }

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
      else if (window.nextDeath == window.people.name4){
        nextDeathFour()
      }
      else {
        nextDeath()
      }
  }
  render() {
    return (
      <Main text={ window.text } imgUrl="/assets/Deal.png" nextLink={window.linkNew}/>
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
function nextDeathFour(){
  delete window.people.name4
  delete window.people.rel4
  window.nextDeath = "you"
  console.log("ran next death 4")
}
function nextDeath(){
  window.nextDeath = window.people.name1
  console.log("ran next death")
}

export default Deal;
