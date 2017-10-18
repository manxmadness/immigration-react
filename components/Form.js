import React, { Component } from 'react';
import { Link } from 'react-router'

class Form extends Component {
  render() {
    return (
      <div>
        <p className="text-center">To create a more personalized experience, please enter your name and age.</p>
        <div className="row">
            <div className="col-lg-6 col-sm-12 text-left">
            <label htmlFor="yourName">Your Name</label>
               <input type="email" className="form-control" id="yourName"/>
            </div>
            <div className="col-lg-3 col-sm-6 text-left">
            <label htmlFor="yourAge">Your Age</label>
               <input type="number" className="form-control" id="yourAge"/>
            </div>
            <div className="col-lg-3 col-sm-6 text-left">
            <label htmlFor="yourGender">Your Gender</label><br/>
            <div className="form-check form-check-inline">
              <label className="form-check-label">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="male"/> M
              </label>

              <label className="form-check-label">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="female"/> F
              </label>
            </div>
            </div>
        </div>
        <div className="col-12">
          <Link to="/Form2" onClick={captureNameAge}>Continue</Link>
        </div>

      </div>
    );
  }
}


export default Form;

  function captureNameAge() {
   window.name = $("#yourName").val();
   window.age = $("#yourAge").val();
   window.gender = $('input[name=inlineRadioOptions]:checked').val()
  //  window.gender = $("#yourGender").val();
   console.log(window.name)
   console.log(window.age)
   console.log(window.gender)
  }
