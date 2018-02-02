import React, { Component } from 'react';
import { Link } from 'react-router'

class Form extends Component {
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
   <div className = "col-12">
      <p className="prompt text-center">To create a more personalized experience, please enter your name and age.</p>
   </div>
   <div className="col-lg-6 col-sm-12 text-left">
      <label htmlFor="yourName">Your Name</label>
      <input onChange={this.handleChange} type="text" className="form-control" id="yourName"/>
   </div>
   <div className="col-lg-3 col-sm-6 text-left">
      <label htmlFor="yourAge">Your Age</label>
      <input type="number" className="form-control" id="yourAge"/>
   </div>
   <div className="col-lg-3 col-sm-6 text-left">
      <label htmlFor="yourGender">Your Gender</label><br/>
      <div className="custom-control custom-radio custom-control-inline">
        <input type="radio" id="customRadioInline1" name="inlineRadioOptions" value="male" className="custom-control-input"/>
        <label className="custom-control-label" htmlFor="customRadioInline1">M</label>
      </div>
      <div className="custom-control custom-radio custom-control-inline">
        <input type="radio" id="customRadioInline2" name="inlineRadioOptions" value="female" className="custom-control-input"/>
        <label className="custom-control-label" htmlFor="customRadioInline2">F</label>
      </div>
   </div>
   <div className="col-lg-6 col-md-7 col-12 text-center">
      <Link id="continue" className="disabled btn btn-dark btn-block" to="/Form2" onClick={captureNameAge}>
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
