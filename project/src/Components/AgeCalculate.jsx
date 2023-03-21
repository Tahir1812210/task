import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import Input from '../Common/Input';


import AgeStats from './AgeStats';

class AgeCalculate extends Component {
  constructor() {
    super();
    this.state = {
      newDate: '',
      birthday: '1985-08-05',
      showStats: false //->ternary expression
    };
  }

  changeBirthday() {
    console.log(this.state);
    this.setState({ birthday: this.state.newDate, showStats: true }); //important to set default state
  }

  render() {
    return (
      <div>
        <Form>
        <FormControl
            style={{marginBottom: 10, martginTop: 10}}
            className='control'
            type='date'
            onChange={event => this.setState({ newDate: event.target.value })}
          />
          {''}
          <Button className='button' onClick={() => this.changeBirthday()}>
            Submit
          </Button>
          {this.state.showStats ? (
            <FormControl
            style={{marginBottom: 10, martginTop: 10}}
            className='control'
            type='int'
            onChange={this.state.birthday}
            />
          ) : (
            <FormControl />
          )}
        </Form>
      </div>
    );
  }
}

export default AgeCalculate;