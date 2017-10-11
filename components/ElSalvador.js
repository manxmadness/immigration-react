import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';


class Elsalvador extends Component {
  render() {
    return (
      <Main text="As you know, El Salvador has the highest murder rate in the world. It is also the epicenter of a gang crisis, along with Guatemala and Honduras" imgUrl="../assets/elsalvador.png" nextLink="/Story2"/>
    );
  }
}

export default Elsalvador;
