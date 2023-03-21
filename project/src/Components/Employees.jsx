import React, { Component, Fragment } from "react";
import Table from "../Common/Table";
import { getEmployees } from "../services/FakeEmployeeService";
import axios from 'axios';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modals from "../Common/Modals";
import { Link } from "react-router-dom";

const ApiEndPoint = 'https://jsonplaceholder.typicode.com/posts';

export default class Employees extends Component {
  state = {
    // employees: [],
    posts: [],
    show: false,
  };

  async componentDidMount()
  {
      const {data : posts} = await axios.get(ApiEndPoint);
      this.setState({posts});
  }

  //  componentDidMount()
  //  {
  //    this.setState({employees:getEmployees()})
  //  }

  handleEdit = (item) => {
    this.setState({ show: true });
  };

  handleDelete = async post => {
       await axios.delete(ApiEndPoint + '/' + post.id)
       const posts = this.state.posts.filter(p => p.id !== post.id)
       this.setState({posts})  
     }
  

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleUpdate = () => {};

  render() {
    const { posts } = this.state;

    return (
      <div>
        {/* <Fragment>
          <Container>
            <Row>
              <Col><input className="form-control" placeholder="Enter Name" /></Col>
              <Col><input className="form-control" placeholder="Enter Gender" /></Col>
              <Col><input className="form-control" placeholder="Enter Region" /></Col>
              <Col><input className="form-control" placeholder="Enter Department" /></Col>
              <Col><input className="form-control" placeholder="Enter Salary" /></Col>
            </Row>
          </Container>
        </Fragment> */}


        <Table
          Data={posts}
          onDelete={this.handleDelete}
          onEdit={this.handleEdit}
        />

        <Modals
        show={this.state.show}
        onClose={this.handleClose}
        onUpdate={this.handleUpdate}
        />

{/* <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modify / Update Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleUpdate}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal> */}
      </div>
    );
  }
}
