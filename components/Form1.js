import React, { Component } from 'react';
import Form from './Form';

class Form1 extends React.Component {
  submit = (values) => {
    // print the form values to the console
    console.log(values)
  }
  render() {
    return (
      <Form onSubmit={this.submit} />
    )
  }
}

export default Form1;
