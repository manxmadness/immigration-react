import React, { Component } from 'react';
import { Link } from 'react-router'

class Main extends Component {
  render() {
    return (
      <div className="row row-top justify-content-center">
        <div className="col-12 height-50">
            <h1>Trigger Warning</h1>
        </div>
        <div className="col-lg-8 col-md-8 col-12">
          <p>This game contains themes of violence, including rape.</p>
        </div>
        <div className="col-lg-6 col-md-7 col-12 text-center">
          <Link className="btn btn-dark btn-block" to="/Form">Continue</Link>
        </div>
      </div>
    );
  }
}


export default Main;
