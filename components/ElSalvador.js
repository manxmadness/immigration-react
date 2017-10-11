import React, { Component } from 'react';
import { Link } from 'react-router'


class Elsalvador extends Component {
  render() {
    return (
      <div>
        <div className="col-12">
          <img className="img-fluid img-v thumb" src="../assets/elsalvador.png"/>
        </div>
        <div className="col-12">
          <p>As you know, El Salvador has the highest murder rate in the world. It is also the epicenter of a gang crisis, along with Guatemala and Honduras</p>
        </div>
        <Link to={'/MS13'}>Continue</Link>
      </div>
    );
  }
}

export default Elsalvador;
