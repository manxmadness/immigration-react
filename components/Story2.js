import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Story2 extends Component {
  render() {
    return (
      <Main text={"On your way home one day, you are stopped by a few men. Men with tattoos all over their face and body. They followed you. Based on their tattoos, you guess they're members of MS13, or Mara Salvatrucha."} imgUrl="../assets/001a_confront.png" nextLink={randomNum.replace(/\s/g, '')}/>
    );
  }
}

var rand = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var generateWeighedList = function(list, weight) {
    var weighed_list = [];

    // Loop over weights
    for (var i = 0; i < weight.length; i++) {
        var multiples = weight[i] * 100;

        // Loop over the list of items
        for (var j = 0; j < multiples; j++) {
            weighed_list.push(list[i]);
        }
    }
    return weighed_list;
};

var list = ['Barrio 18', 'MS13'];
var weight = [0, 1];
var weighed_list = generateWeighedList(list, weight);

var random_num = rand(0, weighed_list.length-1);

var randomNum = weighed_list[random_num];

export default Story2;
