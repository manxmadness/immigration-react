import React, { Component } from 'react';
import { Link } from 'react-router'

class Story1 extends Component {

  render() {
    return (
      <div className="col-12">
        <p>Hello, Kelly. You are a 25 y.o. female living in {randomNum}.</p>
        <Link to={randomNum.replace(/\s/g, '')}>Continue</Link>
      </div>
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

var list = ['El Salvador', 'Honduras', 'Guatemala'];
var weight = [0.8, 0.1, 0.1];
var weighed_list = generateWeighedList(list, weight);

var random_num = rand(0, weighed_list.length-1);

var randomNum = weighed_list[random_num];

export default Story1;
