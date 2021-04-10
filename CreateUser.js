import React , {Fragment} from 'react';
import {Form,Button,Navbar,Container} from 'react-bootstrap'
import {Link,BrowserRouter} from 'react-router-dom';

const CreateUser = () => {
  return (
    <Fragment>
         <Navbar bg="dark">
    <Navbar.Brand href="#home" style={{color:'white',}}>
      Add User
    </Navbar.Brand>
  </Navbar>
 <Container fluid>
  
  <Form >

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" />

  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Enter Username" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Phone</Form.Label>
    <Form.Control type="text" placeholder="Enter Phone Number" />
  </Form.Group>


<a href="MainMenu" variant="primary" type="button">
 
    Submit
  </a>
  <pre>     </pre>
  <a href="MainMenu" variant="primary" type="button">

Cancel
</a>
</Form></Container>

    </Fragment>
  )
}

export default CreateUser;
