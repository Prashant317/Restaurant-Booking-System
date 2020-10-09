import React from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@material-ui/core";

export default class ResturantUpdate extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      email: "",
      address: "",
      Rating: "",
      categoryId: '',
      list: [],
    };

    fetch(
      "http://localhost:8080/restaurant/" + this.props.match.params.id
    ).then((resp) => {
      resp.json().then((data) => {
        // console.log(data)
        this.setState({
          id: data.id,
          name: data.name,
          email: data.email,
          address: data.address,
          Rating: data.Rating,
          categoryId: data.categoryId,
        });
      });
    });

    fetch("http://localhost:8080/categories/").then((resp) => {
      resp.json().then((data) => {
        this.setState({
          list: data,
        });
      });
    });


    this.handleChange = this.handleChange.bind();
    this.update = this.update.bind();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  update = () => {
    if(this.state.name===null || this.state.email===null || this.state.address===null || this.state.Rating===null)
    {
        alert('Please Fill All the fields...');
    }else{
    fetch("http://localhost:8080/restaurant/" + this.state.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: this.state.id,
        name: this.state.name,
        email: this.state.email,
        address: this.state.address,
        Rating: this.state.Rating,
        categoryId: this.state.categoryId,
      }),
    }).then((resp) => {
      resp.json().then((result) => {
        // console.log(result)
        alert("Resturant has been Updated");
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
            RESTAURANT UPDATE
          </Typography>

          <TextField
            label="Restaurant Name"
            value={this.state.name}
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
            label="Restaurant Address"
            type="address"
            name="address"
            value={this.state.address}
            onChange={this.handleChange}
            variant="outlined"
            fullWidth
            color="secondary"
            margin="normal"
            size="small"
          />

          <TextField
            label="Restaurant Rating"
            type="Rating"
            name="Rating"
            value={this.state.Rating}
            onChange={this.handleChange}
            variant="outlined"
            fullWidth
            color="secondary"
            margin="normal"
            size="small"
          />

          <TextField
            select
            label="Restaurant Category"
            name="categoryId"
            type="categoryId"
            value={this.state.categoryId}
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
            onClick={this.update}
          >
            Update Restaurant
          </Button>
        </Box>
      </Container>
    );
  }
}
