import React, { Component } from 'react';
import { Link } from 'react-router'

class MainThree extends Component {
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-12">
          <img className="img img-fluid thumb" src={this.props.imgUrl}/>
        </div>
        <div className="col-lg-8 col-md-8 col-12">
          <p>{this.props.text}</p>
        </div>
        <div className="col-lg-6 col-md-7 col-12 text-center">
          <Link className="btn btn-dark btn-block" to={this.props.oneLink}>{this.props.cta1}</Link>
        </div>
        <div className="w-100"></div>
        <div className="col-lg-6 col-md-7 col-12 text-center">
          <Link className="btn btn-dark btn-block" to={this.props.twoLink}>{this.props.cta2}</Link>
        </div>
        <div className="w-100"></div>
        <div className="col-lg-6 col-md-7 col-12 text-center">
          <Link className="btn btn-dark btn-block" to={this.props.threeLink}>{this.props.cta3}</Link>
        </div>
      </div>
    );
  }
}


export default MainThree;
