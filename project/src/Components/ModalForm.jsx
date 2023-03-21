import React from "react";
import Joi from "joi-browser";
import { getEmployee , getEmployees} from "../services/FakeEmployeeService";
import { saveEmployee } from "../services/FakeEmployeeService";
import Form from "../Common/Form";
import DatePicker from "react-datepicker"
import { editEmployee } from "../services/FakeEmployeeService";


class ModalForm extends Form {
  state = {
    data: {
      userId: "",
      title: "",
      body: "",
    },
    errors: {},
  };

schema = {
  userId: Joi.string(),
  title: Joi.string().required().label("Title"),
  body: Joi.string().required().label("Body")
}

populateblogsmodal()
{
  try
  {
      const employeeId = this.props.match.params.id;
      if(employeeId == 'new') return
      const {data : employee} = getEmployee(employeeId)
      this.setState({data : this.mapToViewModel(employee)})
  }
  catch(ex)
  {
    if(ex.response && ex.response.status == 404)
    {
      this.props.history.replace("/not-found")
    }
  }
}

componentDidMount()
{
  this.populateblogsmodal()
}

mapToViewModel(employee)
{
 return{
  id : employee.id,
  userId : employee.userId,
  title : employee.title,
  body : employee.body
 }
}

doSubmit()
{
  editEmployee(this.state.data)
  
}

  render() {
    return (
        <div>
            <h1>Employee Blog Modal Form</h1>
            {/* <form onSubmit={this.handleSubmit}> */}
            <form>
                {this.renderInput("userId","UserID")}
                {this.renderInput("title","Title")}
                {this.renderInput("body","Body")}
                {this.renderButton("Update")}
            </form>
        </div>
   );
  }
}

export default ModalForm;
