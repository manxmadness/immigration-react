import React, { Component } from 'react';
import { Link } from 'react-router'

class Form2 extends Component {
  render() {
    return (
      <div>

        <p className="text-center">{"Thanks " + window.name + ", just one more step. Please enter the names of a few people who you are close to"}</p>
          <div className="row">
            <div className="col-6 text-left">
              <label htmlFor="theirName1">Relative</label>
              <input type="text" className="form-control name" id="theirName1"/>
            </div>
            <div className="col-6 text-left">
              <label htmlFor="option1">Relationship</label>
              <select id="rel1" className="form-control relation">
                  <option hidden>Choose relationship</option>
                  <option>Friend</option>
                  <option>Brother</option>
                  <option>Sister</option>
                  <option>Cousin</option>
                  <option>Son</option>
                  <option>Daughter</option>
                  <option>Dad</option>
                  <option>Mom</option>
              </select>
            </div>
            <div className="col-6 text-left">
              <input type="text" className="form-control name" id="theirName2"/>
            </div>
            <div className="col-6 text-left">
              <select id="rel2" className="form-control relation">
                  <option hidden>Choose relationship</option>
                  <option>Friend</option>
                  <option>Brother</option>
                  <option>Sister</option>
                  <option>Cousin</option>
                  <option>Son</option>
                  <option>Daughter</option>
                  <option>Dad</option>
                  <option>Mom</option>
              </select>
            </div>
            <div className="col-6 text-left">
              <input type="text" className="form-control name" id="theirName3"/>
            </div>
            <div className="col-6 text-left">
              <select id="rel3" className="form-control relation">
                <option hidden>Choose relationship</option>
                <option>Friend</option>
                <option>Brother</option>
                <option>Sister</option>
                <option>Cousin</option>
                <option>Son</option>
                <option>Daughter</option>
                <option>Dad</option>
                <option>Mom</option>
              </select>
            </div>
            <div className="col-6 text-left">
              <input type="text" className="form-control name" id="theirName4"/>
            </div>
            <div className="col-6 text-left">
              <select id="rel4" className="form-control relation">
                <option hidden>Choose relationship</option>
                <option>Friend</option>
                <option>Brother</option>
                <option>Sister</option>
                <option>Cousin</option>
                <option>Son</option>
                <option>Daughter</option>
                <option>Dad</option>
                <option>Mom</option>
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

function buttonState() {
    $("input").each(function() {
        $('#continue').addClass('disabled');
        if ($(this).val() == "") return false;
        $('#continue').removeClass('disabled');
    })
    // $("#theirName1").genderApi({
    //     key: 'epHoxmloSHGQKzuWbW'
    // }).on('gender-found', function(e, result) {
    //
    //     if (result.accuracy >= 60) {
    //         alert('Gender found: ' + result.gender);
    //     }
    // });
}

$(function() {
    $('#continue').addClass('disabled');
    $('input').change(buttonState);
})

function returnPronoun(reference, rel){
  const rels = {
    her:{
      brother:'him',
      sister:'her',
      friend:'them',
      cousin:'them',
      mom:'her',
      dad:'him'
    },
    she:{
      brother:'he',
      sister:'she',
      friend:'they',
      cousin:'they',
      mom:'she',
      dad:'he'
    },
    hers:{
      brother:'his',
      sister:'hers',
      friend:'their',
      cousin:'their',
      mom:'hers',
      dad:'his'
    }

  }
  return rels[reference][rel]
}


var sentence = `${returnPronoun('she', 'brother')} gave ${returnPronoun('her', 'friend')} an apple.`

console.log(sentence)
function captureNames() {
    window.people = {}

    for(let i = 1; i < 5; i++){
      window.people[`name${i}`] = $(`#theirName${i}`).val()
      window.people[`rel${i}`] = $(`#rel${i}`).val()
      // window.people[`person${i}`]=[$(`#theirName${i}`).val(),$(`#rel${i}`).val()]

    }
    console.log(window.people)
    //
    // window.name1 = $('#theirName1').val();
    // window.rel1 = $('#rel1').val();
    // window.name2 = $('#theirName2').val();
    // window.rel2 = $('#rel2').val();
    // window.name3 = $('#theirName3').val();
    // window.rel3 = $('#rel3').val();
    // window.name4 = $('#theirName4').val();
    // window.rel4 = $('#rel4').val();

    // console.log(window.people.name1)
    console.log(returnPronoun('her', 'friend'))
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
