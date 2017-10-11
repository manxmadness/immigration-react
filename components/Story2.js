import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Story2 extends Component {
  render() {
    return (
      <Main text={"On your way home from work, you are stopped by a member of " + randomNum + " and propositioned to be a member of their gang. Young women are valuable assets to gangs—inconspicuous foot soldiers, and excellent cannon fodder."} imgUrl="../assets/ms13.png" nextLink={randomNum.replace(/\s/g, '')}/>
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
