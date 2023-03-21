import React from "react";
import Joi from "joi-browser";
import { getEmployee, getEmployees } from "../services/FakeEmployeeService";
import { saveEmployee } from "../services/FakeEmployeeService";
import Form from "../Common/Form";
import AgeStats from "./AgeStats";
import { FormControl, Button } from 'react-bootstrap';
import DatePicker from "react-datepicker"
import { getGenders } from "../services/fakeCategoryService";
import axios from "axios";

class EmployeeForm extends Form {
  state = {
    data: {
    //Name: "",
    //Region: "", 
    //genderId: "",
    //Department: "",
    //Salary: "",
    userId: "",
    //id: "",
    title: "",
    body: "",
    },
    //Genders: [],
    errors: {},
    //showStats: false //->ternary expression
  };





  schema = {
    userId: Joi.number().required().label("UserID"),
    title: Joi.string().required().label("Title"),
    body: Joi.string().required().label("Body")
    //_id: Joi.string(),
    //Name: Joi.string().required().label("Name"),
    //Region: Joi.string().min(0).max(100).required().label("Region"),
    //genderId: Joi.string().required().label("Gender"),
    //Department: Joi.string().min(0).max(10).required().label("Department"),
    //Salary: Joi.number().min(0).max(90000).required().label("Salary"),
  };

  populateemployeeblog = async () =>
  {
    try
    {
      const employeeId = this.props.match.params.id;
      if (employeeId === "new") return;
      const {data : employee} = await getEmployee(employeeId);
      //const {data : employee} = await getEmployees();
      this.setState({ data: this.mapToViewModel(employee) });
    }
    catch(ex)
    {
      if (ex.response && ex.response.status==404) 
      this.props.history.replace("/not-found");
    }

  }

  async componentDidMount() {

    await this.populateemployeeblog()
    //const Genders = getGenders();
    //this.setState({Genders})

   
  }

  mapToViewModel =(employee) => {
    return {
      id : employee.id,
      userId : employee.userId,
      title : employee.title,
      body : employee.body,
      // _id: employee._id,
      // Name: employee.Name,
      // Region: employee.Region,
      //genderId: employee.Gender._id, 
      // Department: employee.Department, 
      // Salary: employee.Salary,
    };
  }
  


  doSubmit = async () => {
   await saveEmployee(this.state.data)
    //await axios.post('https://jsonplaceholder.typicode.com/posts',this.state.data)
    //alert('congrats')
    this.props.history.push("/posts")
    //alert('Congrats')
  }
  

  render() {
    return (
        <div>
            <h1>Employee Blogs Form</h1>
             <form
              onSubmit={this.handleSubmit}
              > 
                {this.renderInput("userId","UserID")}
                {this.renderInput("title","Title")}
                {this.renderInput("body","Body")}
                {this.renderButton("Submit")}
                {/* {this.renderInput("Name","Name")}
                {this.renderInput("Region","Region")} */}
                {/* {this.renderSelect("genderId","Gender",this.state.Genders)} */}
                {/* {this.renderInput("Department","Department")}
                {this.renderInput("Salary","Salary","number")}
                {this.renderButton("Submit")} */}
            </form>
        </div>
   );
  }
}

export default EmployeeForm;
