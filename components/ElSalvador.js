import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';


class Elsalvador extends Component {
  render() {
    return (
      <Main text={["Organized crime, gang violence, and poverty have erupted in your country, a country that you once loved but now fear. A nation that now has one of the highest homicide rates in the world. As these problems have strengthened, you\u0027ve seen a number of your family and friends fall victim to the gang, to MS-13",<a href='https://en.wikipedia.org/wiki/MS-13' target='_blank'><sup>[2]</sup></a>,", the tattoo-garnished gang responsible for rape, murder, and drug trafficking in your once beloved country. No one is safe. There seems to be no other way than to leave everything you know behind."]} imgUrl="../assets/Story1.png" nextLink="/Story2"/>
    );
  }
}

export default Elsalvador;
