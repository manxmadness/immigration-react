import React, { Component } from 'react';
import { Link } from 'react-router'

class MainTwo extends Component {
  render() {
    return (
      <div>
        <div className="col-12">
<<<<<<< HEAD
      <img className="img-fluid img-v" src={this.props.imgUrl}/>
      </div>
      <div className="col-12">
      <p>{this.props.text}</p>
      </div>
      <div className="col-12">
        <Link to={this.props.oneLink}>{this.props.cta1}</Link>
      </div>
      <div className="col-12">
        <Link to={this.props.twoLink}>{this.props.cta2}</Link>
      </div>
      <div className="col-12">
        <Link to={this.props.threeLink}>{this.props.cta3}</Link>
      </div>
=======
          <img className="img thumb" src={this.props.imgUrl}/>
        </div>
        <div className="col-12 text-container">
          <p>{this.props.text}</p>
        </div>
        <div className="col-5 m-auto">
          <Link className="btn btn-dark btn-block" to={this.props.oneLink}>{this.props.cta1}</Link>
        </div>
        <div className="col-5 m-auto">
          <Link className="btn btn-dark btn-block" to={this.props.twoLink}>{this.props.cta2}</Link>
        </div>
>>>>>>> my-temporary-work
      </div>
    );
  }
}


export default MainTwo;
