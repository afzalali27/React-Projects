import React from "react";
import { Field, formValues, reduxForm } from "redux-form";
class StreamForm extends React.Component {
  renderError(meta) {
    // meta also contain touched propery which will true as soon as if
    // user touch the form
    // only show error if user touch form
    if (meta.touched && meta.error) {
      return (
        <div className="ui error message">
          <div className="header">{meta.error}</div>
        </div>
      );
    }
    return null;
  }
  renderInput = (formProps) => {
    return (
      // meta property of formProps hold all errors
      <div className="field">
        <label>{formProps.label}</label>
        <input
          // onChange={formProps.input.onChange}
          // value={formProps.input.value}
          // instead we can use below syntax it will add all props to form
          {...formProps.input}
        ></input>
        {this.renderError(formProps.meta)}
      </div>
    );
  };
  onSubmit = (formValues) => {
    // don't need to call
    // event.preventDefault();
    // as in redux form it automatically handled
    // console.log("data from form", formProps);
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        // put error as class name so error will be show up
        // otherwise semantic ui hides the error by default
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="title"
          component={this.renderInput}
          label="Enter Title"
        ></Field>
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        ></Field>
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

// we can valid form data in this function
// in case of invalid value return error message
// with title
const validate = (formValues) => {
  const errors = {};
  // put validation checks like empty fields
  // invalid data
  // pass the errro to error object with same name as filed's nameproperty
  if (!formValues.title) errors.title = "You must enter a title";
  if (!formValues.description)
    errors.description = "You must enter description";
  return errors;
};

// like connect function reduxForm function is use to pass
// all reducer of form to component
export default reduxForm({
  form: "Stream Form",
  validate: validate,
})(StreamForm);
