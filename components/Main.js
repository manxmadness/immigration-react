import React, { Component } from 'react';
import { Link } from 'react-router'

class Main extends Component {
  render() {
    return (
      <div>
        <div className="col-12">
      <img className="img-fluid img-v" src={this.props.imgUrl}/>
      </div>
      <div className="col-12">
      <p>{this.props.text}</p>
      </div>
      <Link to={this.props.nextLink}>Continue</Link>
      </div>
    );
  }
}


export default Main;
