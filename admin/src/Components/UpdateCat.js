import React from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import "../App.css";

export default class ResturantUpdate extends React.PureComponent {
  state = {
    id: "",
    name: "",
    price: "",
    time: "",
  };

  componentDidMount() {
    fetch(
      "http://localhost:8080/categories/" + this.props.match.params.id
    ).then((resp) => {
      resp.json().then((data) => {
        // console.log(data)
        this.setState({
          id: data.id,
          name: data.name,
          price: data.price,
          time: data.time,
        });
      });
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  update = () => {
    if(this.state.id==null || this.state.name==null || this.state.price==null || this.state.time==null)
    {
        alert('Please Fill All the fields...');
    }else{
    fetch("http://localhost:8080/categories/" + this.state.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        price: this.state.price,
        time: this.state.time,
      }),
    }).then((resp) => {
      resp.json().then((result) => {
        // console.log(result)
        alert("Category has been Updated");
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
            UPDATE CATEGORY
          </Typography>

          <div className="box"> {"Category ID: " + this.state.id}</div>

          <TextField
            label="Availability"
            placeholder={this.state.name}
            id="outlined-size-small"
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
            id="outlined-size-small"
            placeholder={this.state.price}
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
            id="outlined-size-small"
            placeholder={this.state.time}
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
            onClick={this.update}
          >
            Update Category
          </Button>
        </Box>
      </Container>
    );
  }
}
