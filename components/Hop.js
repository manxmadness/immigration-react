import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Woman extends Component {
  render() {
    return (
      <Main text={"You hold on tight to " + window.nextDeath +". For the 1450-mile undertaking you all jump from one moving train to another to another to another. Growing tired you lose count, but it’s somewhere between 10 and 15."} imgUrl="../assets/hop.png" nextLink={"/"+weighed_list[random_num]}/>
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

var list = ['Fall', 'Safe'];
var weight = [.5, .5];
var weighed_list = generateWeighedList(list, weight);

var random_num = rand(0, weighed_list.length-1);

var randomNum = weighed_list[random_num];


export default Woman;
