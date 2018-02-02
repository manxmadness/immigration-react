import React, { Component } from 'react';
import { Link } from 'react-router'
import Main from './Main';


class All extends Component {
  render() {
    return (
      <Main text={["The truck approaches the border. All of a sudden Immigration spots the truck. The coyote tries to lose them and flips the truck. It\u0027s one of the worst things you\u0027ve ever seen. People are hurt. People are bleeding. A pregnant woman is seen vomiting blood",<sup><a href='http://www.mysanantonio.com/news/us-world/border-mexico/article/Van-carrying-32-undocumented-immigrants-flips-9198050.php' target='blank'>[22]</a></sup>,"."]} imgUrl="../assets/All.png" nextLink="/Immigration"/>
    );
  }
}

export default All;
