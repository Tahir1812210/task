// import * as genresAPI from "./fakeCategoryService";
//import * as gendersAPI from "./fakeCategoryService";
import axios from 'axios';
import http from './HttpService';

const ApiEndPoint = "https://jsonplaceholder.typicode.com/posts" 



//const employees = [
  // {
  //   _id: "5b21ca3eeb7f6fbccd471815",
  //   Name: "Tahir",
  //   Gender: { _id: "5b21ca3eeb7f6fbccd471815", name: "Male" },
  //   Region: "Jeddah",
  //   Department: "IT",
  //   Salary: "12000",
  // },
  // {
  //   _id: "5b21ca3eeb7f6fbccd471816",
  //   Name: "Kamran",
  //   Gender: { _id: "5b21ca3eeb7f6fbccd471816", name: "Male" },
  //   Region: "Riyadh",
  //   Department: "IT",
  //   Salary: "6000",
  // },
  // {
  //   _id: "5b21ca3eeb7f6fbccd471817",
  //   Name: "Anoosha",
  //   Gender: { _id: "5b21ca3eeb7f6fbccd471817", name: "Female" },
  //   Region: "Jeddah",
  //   Department: "HR",
  //   Salary: "10000",
  // },
  // {
  //   _id: "5b21ca3eeb7f6fbccd471819",
  //   Name: "Sara",
  //   Gender: { _id: "5b21ca3eeb7f6fbccd471819", name: "Female" },
  //   Region: "Riyadh",
  //   Department: "Sales",
  //   Salary: "9000",
  // },
//];

export function getEmployees() {
  return http.get(ApiEndPoint);
}

export function getEmployee(employeeId) {
  return http.get(ApiEndPoint + '/' + employeeId)
}

export function saveEmployee(employee) {
  const obj = {
    employee : employee.userId,
    employee : employee.title,
    employee : employee.body
  }
  return http.post(ApiEndPoint,obj)
}


export function editEmployee(employee)
{
  if(employee.id)
  {
    const body = {...employee}
    delete body.id
    http.put(ApiEndPoint + '/' + employee.id)
  }
}


// export function deleteMovie(id) {
//   let movieInDb = movies.find(m => m._id === id);
//   movies.splice(movies.indexOf(movieInDb), 1);
//   return movieInDb;
// }
