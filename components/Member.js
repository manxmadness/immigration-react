import React, { Component } from 'react';
import { Link } from 'react-router'

class Member extends Component {
  render() {
    return (
      <div>
        <div className="col-12">
      <img className="img-fluid img-v" src="../assets/ms13.png"/>
      </div>
      <div className="col-12">
      <p>The member gives you 2 choices—join, or be killed. You have until tomorrow to decide.</p>
      </div>
      <Link to='/'>Continue</Link>
      </div>
    );
  }
}


export default Member;
