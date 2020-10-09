import React, { Component } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

export default class Create extends Component {
  state = {
    id: null,
    name: null,
    price: null,
    time: null,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  create = () => {
    if(this.state.id==null || this.state.name==null || this.state.price==null || this.state.time==null)
    {
        alert('Please Fill All the fields...');
    }else{
    fetch("http://localhost:8080/categories", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((resp) => {
      resp.json().then((result) => {
        // console.log(result)
        alert("Category has been Added");
      });
    });
    this.setState({
      id:null,
      name:null,
      price:null,
      time:null
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
            CREATE CATEGORY
          </Typography>

          <TextField
            label="category"
            value={this.state.id}
            type="id"
            name="id"
            onChange={this.handleChange}
            variant="outlined"
            fullWidth
            color="secondary"
            margin="normal"
            size="small"
          />

          <TextField
            label="Availability"
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
            label="Start Price"
            value={this.state.price}
            type="text"
            name="price"
            onChange={this.handleChange}
            variant="outlined"
            fullWidth
            color="secondary"
            margin="normal"
            size="small"
          />

          <TextField
            label="Timings"
            value={this.state.time}
            id="outlined-size-small"
            type="text"
            name="time"
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
            Add Category
          </Button>
        </Box>
      </Container>
    );
  }
}
