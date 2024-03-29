import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';


class Flee extends Component {

  render() {
    return (
      <Main text={["It's time to leave. You know the journey will be long. Unsafe. You think to yourself, \u0022If we leave we may die, but if we stay we will die.\u0022 You pack what you can carry",<sup><a href='https://www.nytimes.com/2016/11/13/world/americas/fleeing-gangs-central-american-families-surge-toward-us.html' target='_blank'>[7]</a></sup>,"; a change of clothes, a map, flashlight, a bit of cash found last minute, a little bit of food and water."]} imgUrl="../assets/backpack.png" nextLink="/Pill"/>
    );
  }
}

export default Flee;
