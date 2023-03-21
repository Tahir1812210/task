import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import EmployeeForm from "../Components/EmployeeForm";
import ModalForm from "../Components/ModalForm";

const Modals = (props) => {
    const {show , onClose , onUpdate } = props
  return (
    <div>
      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modify / Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <ModalForm />  
        </Modal.Body>
        <Modal.Footer>
          <Button 
          variant="secondary" onClick={onClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={onUpdate}>
            Update
          </Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Modals;
