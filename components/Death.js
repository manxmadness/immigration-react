import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Death extends Component {
  componentDidMount() {
    console.log("kelly")
    delete window.people['name1']
    delete window.people['rel1']
    console.log(window.people)
  }
  render() {
    return (
      <Main text= {window.people.name1 + " is murdered."} imgUrl="../assets/004_body.png" nextLink="/Decision2"/>
    );
  }
}



export default Death;
