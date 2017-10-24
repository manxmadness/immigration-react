import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';


class Flee extends Component {
  
  render() {
    return (
      <Main text="It’s time to leave. You know the journey will be long. Unsafe. You think to yourself, “If we leave we may die, but if we stay we will die.” You pack what you can carry; a change of clothes, a map, flashlight, a bit of cash found last minute, a little bit of food and water." imgUrl="../assets/backpack.png" nextLink="/Pill"/>
    );
  }
}

export default Flee;
