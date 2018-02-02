import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';

class Phone extends Component {
  render() {
    return (
      <Main text={["Death threats started soon after",<a href='http://digitaledition.baltimoresun.com/tribune/article_popover.aspx?guid=a68d0407-db5c-47c8-b9a4-2fc6d8a9268a' target='_blank'><sup>[6]</sup></a>,". Anonymous phone calls at all hours. A gruff voice at the other end, \u0022Give me $400 by the end of the week or you and your family die.\u0022"]} imgUrl="../assets/002_phonecalls.png" nextLink="/Response2"/>
    );
  }
}


export default Phone;
