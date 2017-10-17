import React from 'react'
import { Field, reduxForm } from 'redux-form'

let Form = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text"/>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

Form = reduxForm({
  // a unique name for the form
  form: 'contact'
})(Form)

export default Form;
