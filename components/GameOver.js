import React, { Component } from 'react';
import { Link } from 'react-router'

class GameOver extends Component {
  render() {
    return (
      <div>
        <div className="col-12">

            <img className="img thumb" src="../assets/go.png"/>

        </div>
        <div className="col-12 text-container">
          <p>{this.props.text}</p>
        </div>

      </div>
    );
  }
}


export default GameOver;
