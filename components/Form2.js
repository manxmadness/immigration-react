import React, { Component } from 'react';
import { Link } from 'react-router'

class Form2 extends Component {
  render() {
    return (
      <div>
        <p className="text-center">{"Thanks " + window.name +", just one more step. Please enter the names of a few people who you are close to"}</p>
        <div className="row">
            <div className="col-6 text-left">
              <label htmlFor="theirName1">Relative</label>
              <input type="text" className="form-control" id="theirName1"/>
            </div>
            <div className="col-6 text-left">
              <label htmlFor="option1">Relationship</label>
              <select id="rel1" className="form-control">
                <option>Brother</option>
                <option>Sister</option>
                <option>Friend</option>
                <option>Mom</option>
                <option>Dad</option>
              </select>
            </div>
            <div className="col-6 text-left">
              <input type="text" className="form-control" id="theirName2"/>
            </div>
            <div className="col-6 text-left">
              <select id="rel2" className="form-control">
                <option>Brother</option>
                <option>Sister</option>
                <option>Friend</option>
                <option>Mom</option>
                <option>Dad</option>
              </select>
            </div>
            <div className="col-6 text-left">
              <input type="text" className="form-control" id="theirName3"/>
            </div>
            <div className="col-6 text-left">
              <select id="rel3" className="form-control">
                <option>Brother</option>
                <option>Sister</option>
                <option>Friend</option>
                <option>Mom</option>
                <option>Dad</option>
              </select>
            </div>
          </div>
        <div className="col-12">
          <Link to="/" onClick={captureNames}>Continue</Link>
        </div>

      </div>
    );
  }
}


export default Form2;

  function captureNames() {
    window.name1 = $('#theirName1').val();
    window.name2 = $('#theirName2').val();
    window.name3 = $('#theirName3').val();
    window.rel1 = $('#rel1').val();
    window.rel2 = $('#rel2').val();
    window.rel3 = $('#rel3').val();
    console.log(window.rel1)
    console.log(window.rel2)
    console.log(window.rel3)
  }
