import React, { Component } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@material-ui/core";

export default class Create extends Component {
  state = {
    name: null,
    email: null,
    address: null,
    Rating: null,
    categoryId: null,
    list: [],
  };

  componentDidMount() {
    fetch("http://localhost:8080/categories/").then((resp) => {
      resp.json().then((data) => {
        this.setState({
          list: data,
        });
      });
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  create = () => {
    if(this.state.name===null || this.state.email===null || this.state.address===null || this.state.Rating===null)
        {
            alert('Please Fill All the fields...');
        }
        else{
        fetch("http://localhost:8080/restaurant", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            Rating: this.state.Rating,
            categoryId: this.state.categoryId,
      }),
    }).then((resp) => {
      resp.json().then((result) => {
        // console.log(result)
        alert("Resturant has been Added");
      });
    });
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
            CREATE RESTAURANT
          </Typography>

          <TextField
            label="Restaurant Name"
            id="outlined-size-small"
            type="name"
            name="name"
            onChange={this.handleChange}
            variant="outlined"
            fullWidth
            color="secondary"
            margin="normal"
            size="small"
          />

          <TextField
            label="Restaurant Email Id"
            id="outlined-size-small"
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
            label="Restaurant Address"
            id="outlined-size-small"
            type="address"
            name="address"
            onChange={this.handleChange}
            variant="outlined"
            fullWidth
            color="secondary"
            margin="normal"
            size="small"
          />

          <TextField
            label="Restaurant Rating"
            id="outlined-size-small"
            type="Rating"
            name="Rating"
            onChange={this.handleChange}
            variant="outlined"
            fullWidth
            color="secondary"
            margin="normal"
            size="small"
          />

          <TextField
            id="outlined-size-small"
            select
            label="Restaurant Category"
            name="categoryId"
            type="categoryId"
            onChange={this.handleChange}
            variant="outlined"
            fullWidth
            color="secondary"
            margin="normal"
            size="small"
          >
            
            {this.state.list.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.id}
              </MenuItem>
            ))}
          </TextField>

          <br />
          <br />
          <Button
            disableElevation
            variant="contained"
            color="primary"
            fullWidth
            onClick={this.create}
          >
            Create Restaurant
          </Button>
        </Box>
      </Container>
    );
  }
}
