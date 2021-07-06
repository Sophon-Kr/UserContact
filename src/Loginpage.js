import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import Container from "react-bootstrap/Container";
// import Card from 'react-bootstrap/Card'
// import Container from 'react-bootstrap/Container'

export class Loginpage extends Component {
  render() {
    return (
        
        <div className="App-header">
     
          
    

      <Form className="Loginform">
      
          <Form.Group  controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group  controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group  controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Save password" />
          </Form.Group>
          <Button variant="success" type="submit">
            Signin
          </Button>
          &nbsp; &nbsp;
          <Button variant="warning" type="submit">
            Signup
          </Button>
        </Form>
        
       
          
       
        </div>
      
      
    );
  }
}

export default Loginpage;
