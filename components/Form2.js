import React, { Component } from 'react';
import { Link } from 'react-router'

class Form2 extends Component {
  constructor(props) {
  super(props);
  this.state = {value: ''};

  this.handleChange = this.handleChange.bind(this);
}

handleChange(event) {
  this.setState({value: event.target.value});
  $("input").each(function() {
      $('#continue').addClass('disabled');
      if ($(this).val() == "") {

      } else {
        $('#continue').removeClass('disabled');
      }

  })
}
  render() {
    return (
      <div className="row row-top justify-content-center">
        <div className="col-12">
          <p className="prompt text-center">{"Thanks " + window.name + ", just one more step. Please enter the names of a few people who you are close to"}</p>
        </div>
        <div className="col-6 text-left">
          <label htmlFor="theirName1">Relative</label>
          <input onChange={this.handleChange} type="text" className="form-control name" id="theirName1"/>
        </div>
        <div className="col-6 text-left">
          <label htmlFor="option1">Relationship</label>
          <select id="rel1" className="form-control relation">
          <option>Guy (Friend, Brother, Cousin)</option>
            {/*<option hidden>Choose relationship</option>
            <option>Friend</option>
            <option>Brother</option>
            <option>Sister</option>
            <option>Cousin</option>
            <option>Son</option>
            <option>Daughter</option>
            <option>Dad</option>
            <option>Mom</option>*/}
          </select>
        </div>
        <div className="col-6 text-left">
          <input onChange={this.handleChange} type="text" className="form-control name" id="theirName2"/>
        </div>
        <div className="col-6 text-left">
          <select id="rel2" className="form-control relation">
          <option>Girl (Friend, Sister, Cousin)</option>
            {/*<option hidden>Choose relationship</option>
            <option>Friend</option>
            <option>Brother</option>
            <option>Sister</option>
            <option>Cousin</option>
            <option>Son</option>
            <option>Daughter</option>
            <option>Dad</option>
            <option>Mom</option>*/}
          </select>
        </div>
        <div className="col-6 text-left">
          <input onChange={this.handleChange} type="text" className="form-control name" id="theirName3"/>
        </div>
        <div className="col-6 text-left">
          <select id="rel3" className="form-control relation">
          <option>Guy (Friend, Brother, Cousin)</option>
            {/*<option hidden>Choose relationship</option>
            <option>Friend</option>
            <option>Brother</option>
            <option>Sister</option>
            <option>Cousin</option>
            <option>Son</option>
            <option>Daughter</option>
            <option>Dad</option>
            <option>Mom</option>*/}
          </select>
        </div>
        <div className="col-6 text-left">
          <input onChange={this.handleChange} type="text" className="form-control name" id="theirName4"/>
        </div>
        <div className="col-6 text-left">
          <select id="rel4" className="form-control relation">
          <option>Girl (Friend, Sister, Cousin)</option>
            {/*<option hidden>Choose relationship</option>
            <option>Friend</option>
            <option>Brother</option>
            <option>Sister</option>
            <option>Cousin</option>
            <option>Son</option>
            <option>Daughter</option>
            <option>Dad</option>
            <option>Mom</option>*/}
          </select>
        </div>
        <div className="col-lg-6 col-md-7 col-12 text-center">
          <button className="btn btn-dark btn-block" onClick={generateNames}>Randomly Generate</button>
        </div>
        <div className="w-100"></div>
        <div className="col-lg-6 col-md-7 col-12 text-center">
          <Link id="continue" className="btn btn-dark btn-block disabled" to="/Story1" onClick={captureNames}>Continue</Link>
        </div>
      </div>
    );
  }
}


export default Form2;


$(function() {
    $('#continue').addClass('disabled');
    // $('input').change(buttonState);
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


// var sentence = `${returnPronoun('she', 'brother')} gave ${returnPronoun('her', 'friend')} an apple.`

// console.log(sentence)
function captureNames() {
    window.people = {}

    for(let i = 1; i < 5; i++){
      window.people[`name${i}`] = $(`#theirName${i}`).val()
      // window.people[`rel${i}`] = $(`#rel${i}`).val()

      // window.people[`person${i}`]=[$(`#theirName${i}`).val(),$(`#rel${i}`).val()]

    }
    window.people.rel1 = "brother"
    window.people.rel2 = "sister"
    window.people.rel3 = "brother"
    window.people.rel4 = "sister"
    // console.log(window.people)
    // console.log(returnPronoun('her', 'friend'))
  }

function generateNames() {
    $('#theirName1').val("Mark");
    $('#theirName2').val("Joyce");
    $('#theirName3').val("Julian");
    $('#theirName4').val("Deb");
    // $('#rel1').val("Brother");
    // $('#rel2').val("Sister");
    // $('#rel3').val("Brother");
    // $('#rel4').val("Sister");
    $('#continue').removeClass('disabled');
}
