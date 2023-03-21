import React from "react";
import {Redirect , Route, Switch} from 'react-router-dom'
import NavBar from "./Common/NavBar";
import Employees from "./Components/Employees";
 import NotFound from "./Components/NotFound";
import Customers from "./Components/Customers";
 import ContactUs from "./Components/ContactUs";
 import EmployeeForm from "./Components/EmployeeForm";
import AgeCalculate from "./Components/AgeCalculate";
function App() {
  return (
    <main className="container">
     {/* <AgeCalculate/>  */}
    
       <NavBar /> 
         <Switch>
         <Route path="/posts/:id" component={EmployeeForm} /> 
          <Route path='/posts' component={Employees} />
           <Route path='/customers' component={Customers}/>
          <Route path='/contact-us' component={ContactUs} />
          <Route path='/not-found' component={NotFound}/>
          <Redirect from="/" exact to="/posts"/>
          <Redirect to="/not-found"/>
        </Switch>  
    </main>

  );
}

export default App;
