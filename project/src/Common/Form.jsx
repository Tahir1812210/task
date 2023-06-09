import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "../Common/Input";
import DatePicker from "react-datepicker";
import Select from "./Select";


class Form extends Component {
  state = {
    data: {},
    errors: {},
    //DateOfBirth: new Date()
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);

    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    console.log(errors);
    return errors;
  };

  renderSelect(name, label , options) {
    const { data, errors } = this.state;

    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }


  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };


  

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    // data[input.name] = data[input.value]; // Here is the error you don't update state correctly
    data[input.name] =input.value;
    this.setState({ data, errors });
  };



  //   renderButton = (label) => {
  //     <button
  //       disabled={this.validate()}
  //       type="submit"
  //       className="btn btn-primary"
  //     >
  //       {label}
  //     </button>;
  //   };



  renderInput(name, label , type="text") {
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }



  renderButton(label){
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  };



}

export default Form;
