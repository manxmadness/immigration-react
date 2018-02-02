import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';


class Pill extends Component {
  render() {
    return (
      <Main text={window.gender == 'male' ? ["Before you leave, "+window.people.name2+", and "+window.people.name4+" take the pill",<sup><a href='http://www.slate.com/news-and-politics/2018/01/trump-uses-people-of-color-as-cover-for-his-anti-immigrant-policies.html' target='_blank'>[8]</a><a href='https://www.theguardian.com/world/2015/oct/28/refugee-crisis-grows-in-latin-america-women-children' target='_blank'>[9]</a></sup>,". During your travels you may come across bad men. They may choose force, but that is part of the cost to a safe place."] : ["Before you leave, you, "+window.people.name2+", and "+window.people.name4+" take the pill",<sup><a href='http://www.slate.com/news-and-politics/2018/01/trump-uses-people-of-color-as-cover-for-his-anti-immigrant-policies.html' target='_blank'>[5]</a><a href='https://www.theguardian.com/world/2015/oct/28/refugee-crisis-grows-in-latin-america-women-children' target='_blank'>[6]</a></sup>,". During your travels you may come across bad men that want more from you than you want to give. They may choose force, but that is part of the cost to a safe place."]} imgUrl="../assets/005a_birthcontrol.png" nextLink="/Story3"/>
    );
  }
}

export default Pill;
