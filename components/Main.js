import React, { Component } from 'react';
import { Link } from 'react-router'

class Main extends Component {
  render() {
    return (
      <div>
        <div className="col-12">
            <img className="img thumb" src={this.props.imgUrl}/>
        </div>
        <div className="col-12 text-container">
          <p>{this.props.text}</p>
        </div>
        <div className="col-5 m-auto">
          <Link className="btn btn-dark btn-block" to={this.props.nextLink}>Continue</Link>
        </div>
      </div>
    );
  }
}


export default Main;
