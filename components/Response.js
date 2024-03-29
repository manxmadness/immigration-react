import React, { Component } from 'react';
import { Link } from 'react-router'
import MainTwo from './MainTwo';

class Response extends Component {
  render() {
    return (
      <MainTwo text="How do you respond?" imgUrl="../assets/Response.png" cta1="You brush it off." cta2="You confront the men." oneLink="/Phone" twoLink="/Argument"/>
    );
  }
}

export default Response;
