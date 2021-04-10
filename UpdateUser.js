import React , {Fragment} from 'react';
import {Form,Button,Navbar,Container} from 'react-bootstrap'
import {Link,BrowserRouter} from 'react-router-dom';

const UpdateUser = () => {
  return (
    <Fragment>
         <Navbar bg="light">
    <Navbar.Brand href="#home">
      Update User
    </Navbar.Brand>
  </Navbar>
 <Container fluid>
  
  <Form >

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text"  />

  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text"/>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Phone</Form.Label>
    <Form.Control type="text" />
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

export default UpdateUser;
