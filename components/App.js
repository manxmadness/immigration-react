import React, { Component } from 'react';
import { Link } from 'react-router'
import Story1 from './Story1';
import {initialMovies} from '../movies';

class App extends Component {
      constructor() {
        super();
        this.state = {
          movies: initialMovies
        };
      }
  render() {
    return (
      <div className="App">
        <div className="movies">
          {
          Object
            .keys(this.state.movies)
            .map(key => <Story1 key={key} meta={this.state.movies[key]} />)
          }
        </div>
        <Link to="/about">Next</Link>
      </div>
    );
  }
}

export default App;
