import React, { Component } from 'react';
import { Link } from 'react-router'

class Form extends Component {
  render() {
    return (
      <div className="row row-top justify-content-center">
   <div className = "col-12">
      <p className="prompt text-center">To create a more personalized experience, please enter your name and age.</p>
   </div>
   <div className="col-lg-6 col-sm-12 text-left">
      <label htmlFor="yourName">Your Name</label>
      <input type="text" className="form-control" id="yourName"/>
   </div>
   <div className="col-lg-3 col-sm-6 text-left">
      <label htmlFor="yourAge">Your Age</label>
      <input type="number" className="form-control" id="yourAge"/>
   </div>
   <div className="col-lg-3 col-sm-6 text-left">
      <label htmlFor="yourGender">Your Gender</label><br/>
      <div className="md-radio md-radio-inline">
          <input id="3" type="radio" value="male" name="male" />
          <label htmlFor="3">M</label>
        </div>
        <div className="md-radio md-radio-inline">
          <input id="4" type="radio" value="female" name="female"/>
          <label htmlFor="4">F</label>
        </div>
   </div>
   <div className="col-lg-6 col-md-7 col-12 text-center">
      <Link className="btn btn-dark btn-block" to="/Form2" onClick={captureNameAge}>
      Continue</Link>
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
  //  console.log(window.name)
  //  console.log(window.age)
  //  console.log(window.gender)
  }
