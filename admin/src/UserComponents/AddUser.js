import React, { Component } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

export default class AddUser extends Component {
  state = {
    name: '',
    username:'',
    password:'',
    email:'',
    contact:'',
    address:''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  create = () => {
    if(this.state.name==='' || this.state.username==='' || this.state.password==='' || this.state.email==='' || this.state.contact==='' || this.state.address==='')
    {
        alert('Please Fill All the fields...');
    }else{
    fetch("http://localhost:8080/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((resp) => {
      resp.json().then((result) => {
        // console.log(result)
        alert("User has been Added");
      });
    });
    this.setState({
        name: '',
        username:'',
        password:'',
        email:'',
        contact:'',
        address:''
    })
   }
  };

  render() {
    return (
      <Container maxWidth="sm">
        <h1 style={{ color: "blue", fontSize: "50px" }}>Welcome Admin</h1>
        <br />
        <Box
          bgcolor="white"
          boxShadow="2"
          borderRadius="12px"
          textAlign="center"
          p="24px"
          mt="50px"
        >
          <Typography variant="h5" color="primary">
            ADD USER
          </Typography>

          <TextField
            label="Name"
            value={this.state.name}
            type="text"
            name="name"
            onChange={this.handleChange}
            variant="outlined"
            fullWidth
            color="secondary"
            margin="normal"
            size="small"
          />

          <TextField
            label="UserName"
            value={this.state.username}
            type="text"
            name="username"
            onChange={this.handleChange}
            variant="outlined"
            fullWidth
            color="secondary"
            margin="normal"
            size="small"
          />

          <TextField
            label="Password"
            value={this.state.password}
            type="password"
            name="password"
            onChange={this.handleChange}
            variant="outlined"
            fullWidth
            color="secondary"
            margin="normal"
            size="small"
          />

          <TextField
            label="Email Id"
            value={this.state.email}
            type="email"
            name="email"
            onChange={this.handleChange}
            variant="outlined"
            fullWidth
            color="secondary"
            margin="normal"
            size="small"
          />

          <TextField
            label="Contact No."
            value={this.state.contact}
            type="text"
            name="contact"
            onChange={this.handleChange}
            variant="outlined"
            fullWidth
            color="secondary"
            margin="normal"
            size="small"
          />

          <TextField
            label="Address"
            type="text"
            name="address"
            value={this.state.address}
            onChange={this.handleChange}
            variant="outlined"
            fullWidth
            color="secondary"
            margin="normal"
            size="small"
          />
          <br />
          <br />
          <Button
            disableElevation
            variant="contained"
            color="primary"
            fullWidth
            onClick={this.create}
          >
            Add User
          </Button>
        </Box>
      </Container>
    );
  }
}
