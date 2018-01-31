import React, { Component } from 'react';
import { Link } from 'react-router'

class GameOver extends Component {
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-12">
            <img className="img img-fluid thumb" src={this.props.imgUrl}/>
        </div>
        <div className="col-12 text-container">
          <p>{this.props.text}</p>
        </div>
        <div className="col-lg-6 col-md-7 col-12 text-center">
          <a className="btn btn-dark btn-block" href="http://kellyprudente.com/northern-triangle/lp/index.html" target="_blank">Read more about the Northern Triangle</a>
        </div>
        <div className="w-100"></div>
      <div className="col-lg-6 col-md-7 col-12 text-center">
        <a className="btn btn-primary btn-block" href="https://www.facebook.com/sharer/sharer.php?u=http%3A//kellyprudente.com/northern-triangle/" target="_blank">Share your journey on Facebook &nbsp; &nbsp; <i className="fa fa-facebook-official" aria-hidden="true"></i></a>
      </div>
    </div>
    );
  }
}


export default GameOver;
