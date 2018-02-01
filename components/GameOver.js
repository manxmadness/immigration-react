import React, { Component } from 'react';
import { Link } from 'react-router'

class GameOver extends Component {
  constructor() {
    super();
    this.onClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    var FBDesc      = 'I just played, and you should, too!';
    var FBTitle     = 'El Triangulo';
    var FBLink      = 'http://kellyprudente.com/northern-triangle/';
    var FBPic       = 'https://s3.amazonaws.com/kellyprudente.com/northern-triangle/assets/el-triangulo-logo.png';
     FB.ui({
         method: 'share_open_graph',
         action_type: 'og.shares',
         action_properties: JSON.stringify({
             object: {
                 'og:url': FBLink,
                 'og:title': FBTitle,
                 'og:description': FBDesc,
                 'og:image': FBPic
             }
         })
     },
   function (response) {
   // Action after response
   })
  }
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
        <div id="shareBtn" className="btn btn-primary btn-block" onClick={this.onClick}>Share your journey on Facebook &nbsp; &nbsp; <i className="fa fa-facebook-official" aria-hidden="true"></i></div>
      </div>
    </div>
    );
  }
}

export default GameOver;
