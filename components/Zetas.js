import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';


class Zetas extends Component {
  render() {
    return (
      <Main text="Along the way, you pass through many areas ruled by Los Zetas, one of the most dangerous drug cartels. Los Zetas have been known to board the train kidnapping riders." imgUrl="../assets/013_Zetas.png" nextLink="/Take"/>
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

var list = ['Take', 'Take2'];
var weight = [.5, .5];
var weighed_list = generateWeighedList(list, weight);

var random_num = rand(0, weighed_list.length-1);

var randomNum = weighed_list[random_num];
export default Zetas;
