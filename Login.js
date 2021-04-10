import React , {Fragment} from 'react';
import {Form,Button,Navbar,Container} from 'react-bootstrap'
import {Link,BrowserRouter} from 'react-router-dom';

const Login = () => {

  
  return (
    <Fragment>
         <Navbar bg="dark">
    <Navbar.Brand href="#home" style={{color:'white',}}>
      LOGIN
    </Navbar.Brand>
  </Navbar>
 <Container fluid>
  
  <Form >

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />

  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
<a href="MainMenu" variant="primary" type="button">
 
    Submit
  </a>
  
</Form></Container>

    </Fragment>
  )
}

export default Login;
