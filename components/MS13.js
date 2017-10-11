import React, { Component } from 'react';
import { Link } from 'react-router'
import Story1 from './Story1';

class MS13 extends Component {
  render() {
    return (
      <div>
        <div className="col-12">
          <img className="img-fluid img-v thumb" src="../assets/ms13.png"/>
        </div>
      <div className="col-12">
        <p>MS13, or Mara Salvatrucha, is one of the country’s two main street gangs. You have heard that women are often initiated into a gang through either a beating, or through rape.</p>
      </div>
        <Link to='/Member'>Continue</Link>
      </div>
    );
  }
}

export default MS13;
