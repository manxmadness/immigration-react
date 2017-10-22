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
                <option hidden>Choose relationship</option>
                <option>Dad</option>
                <option>Mom</option>
                <option>Brother</option>
                <option>Sister</option>
                <option>Son</option>
                <option>Daughter</option>
              </select>
            </div>
            <div className="col-6 text-left">
              <input type="text" className="form-control" id="theirName2"/>
            </div>
            <div className="col-6 text-left">
              <select id="rel2" className="form-control">
                <option hidden>Choose relationship</option>
                <option>Dad</option>
                <option>Mom</option>
                <option>Brother</option>
                <option>Sister</option>
                <option>Son</option>
                <option>Daughter</option>
              </select>
            </div>
            <div className="col-6 text-left">
              <input type="text" className="form-control" id="theirName3"/>
            </div>
            <div className="col-6 text-left">
              <select id="rel3" className="form-control">
                <option hidden>Choose relationship</option>
                <option>Dad</option>
                <option>Mom</option>
                <option>Brother</option>
                <option>Sister</option>
                <option>Son</option>
                <option>Daughter</option>
              </select>
            </div>
            <div className="col-6 text-left">
              <input type="text" className="form-control" id="theirName4"/>
            </div>
            <div className="col-6 text-left">
              <select id="rel4" className="form-control">
                <option hidden>Choose relationship</option>
                <option>Dad</option>
                <option>Mom</option>
                <option>Brother</option>
                <option>Sister</option>
                <option>Son</option>
                <option>Daughter</option>
              </select>
            </div>
          </div>
        <div className="col-6 m-auto">
          <button className="btn btn-dark btn-block" onClick={generateNames}>Randomly Generate</button>
        </div>
        <div className="col-6 m-auto">
          <Link id="continue" className="btn btn-dark btn-block disabled" to="/Story1" onClick={captureNames}>Continue</Link>
        </div>
      </div>
    );
  }
}


export default Form2;

    function buttonState(){
        $("input").each(function(){
            $('#continue').addClass('disabled');
            if($(this).val() == "" ) return false;
            $('#continue').removeClass('disabled');
        })
    }

    $(function(){
        $('#continue').addClass('disabled');
        $('input').change(buttonState);
    })

  function captureNames() {
    window.name1 = $('#theirName1').val();
    window.name2 = $('#theirName2').val();
    window.name3 = $('#theirName3').val();
    window.name4 = $('#theirName4').val();
    window.rel1 = $('#rel1').val();
    window.rel2 = $('#rel2').val();
    window.rel3 = $('#rel3').val();
    window.rel4 = $('#rel4').val();
  }
  function generateNames() {
    $('#theirName1').val("Mark");
    $('#theirName2').val("Joyce");
    $('#theirName3').val("Julian");
    $('#theirName4').val("Deb");
    $('#rel1').val("Brother");
    $('#rel2').val("Sister");
    $('#rel3').val("Brother");
    $('#rel4').val("Sister");
    $('#continue').removeClass('disabled');
  }
