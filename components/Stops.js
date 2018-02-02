import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Stops extends Component {
  render() {
    return (
      <Main text={["The bus stops on a bus corner on the usual route. Two tattooed faced men board",<sup><a href='https://www.npr.org/sections/parallels/2016/04/14/473934734/city-interrupted-how-gang-killings-brought-san-salvadors-bus-service-to-a-halt' target='_blank'>[12]</a><a href='https://www.nytimes.com/2016/11/21/world/americas/el-salvador-drugs-gang-ms-13.html' target='_blank'>[13]</a></sup>,"."]} imgUrl="../assets/001a_confront.png" nextLink="/Bus"/>
    );
  }
}


export default Stops;
