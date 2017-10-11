import React, { Component } from 'react';
import { Link } from 'react-router'
import Story1 from './Story1';
import {initialMovies} from '../movies';

class App extends Component {
  render() {
    return (
      <Story1 />
    );
  }
}

export default App;
