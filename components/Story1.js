import React, { Component } from 'react';

class Story1 extends Component {
  render() {
    return (
      <div className="container text-center">
      <div className="row">
        <div className="col">
        <div><img width="200" src={this.props.meta.poster}/></div>
        <p>{this.props.meta.description}</p>
      </div>
      </div>
      </div>
    );
  }
}

export default Story1;
