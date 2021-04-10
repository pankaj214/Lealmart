import React,{Fragment} from 'react'
import {Table} from 'react-bootstrap'
import {Form,Button,Navbar,Container} from 'react-bootstrap'
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios'

const MainMenu=()=>{


const gets=()=>{
  axios.get("https://reqres.in/api/users/").then((response)=>{
  })
}

    return(
<Fragment>
<Navbar bg="light">
    <Navbar.Brand href="#home" vaariant="h3">
      MY CUSTOMERS
    </Navbar.Brand>
  </Navbar>
  <br/>
<SearchIcon/>
  <input style={{width:'100%'}} type="text" placeholder="Search by name,username,phone,email"/>
<br/><br/>
<a href="CreateUser" style={{float:'right',backgroundColor:'blue',color:'white'}}>Add User</a>
<br/><br/>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>S.No</th>
      <th>Name</th>
      <th>Username</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Created at</th>
      <th colspan="2">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td><a href="UpdateUser">edit</a></td>
      <td><a href="#">Delete</a></td>
    </tr>
   
  </tbody>
</Table>
</Fragment>
    );
}
export default MainMenu;
