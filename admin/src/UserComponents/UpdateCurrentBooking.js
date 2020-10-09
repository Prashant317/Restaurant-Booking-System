import React, { Component } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@material-ui/core";
import "../App.css";
import 'date-fns';

export default class UpdateCurrentBookings extends Component {
  state = {
    userid:'',
    name: '',
    email: '',
    contact:'',
    address: '',
    category:'',
    restaurant:'Tamra Restaurant',
    location:'',
    time:'',
    date: new Date(),
    seats:'',
    parking:'',

    bookingid: '',
    list: [],
    reslist:[],
    booking:[]
  };

 
  componentDidMount() {

    //fetch cuurentbooking for this user
    fetch("http://localhost:8080/currentBookings/"+ this.props.match.params.id).then((resp) => {
        resp.json().then((data) => {
          this.setState({
            bookingid:data.id,
            userid: data.userId,
            name: data.name,
            email:data.email,
            contact:data.contact,
            address:data.address,
            category:data.category,
            restaurant:data.restaurant,
            location:data.location,
            time:data.time,
            date:data.date,
            seats:data.seats,
            parking:data.parking
          });
        });
      });

    //to fetch categories
    fetch("http://localhost:8080/categories").then((resp) => {
      resp.json().then((data) => {
        this.setState({
          list: data,
        });
      });
    });

    //to fetch restaurants
    fetch(`http://localhost:8080/restaurant`).then((resp) => {
        resp.json().then((data) => {
            this.setState({
                reslist:data,
            })
        })
    })

  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };


  update = () => {
    
        fetch("http://localhost:8080/currentBookings/" + this.state.bookingid, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: this.state.userid,
            name: this.state.name,
            email: this.state.email,
            contact: this.state.contact,
            address: this.state.address,
            category: this.state.category,
            restaurant: this.state.restaurant,
            location: this.state.location,
            time: this.state.time,
            date: this.state.date,
            seats: this.state.seats,
            parking: this.state.parking
      }),
    }).then((resp) => {
      resp.json().then((result) => {
        // console.log(result)
        alert("Booking Has Been Updated")
      });
    });
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
            Update This Table 
          </Typography>

          <div className="box"> {"User Id: " + this.state.userid}</div>

          <TextField
            label="Customer Name"
            id="outlined-size-small"
            type="name"
            name="name"
            placeholder={this.state.name}
            onChange={this.handleChange}
            variant="outlined"
            fullWidth
            color="secondary"
            margin="normal"
            size="small"
          />

          <TextField
            label="Customer Email Id"
            id="outlined-size-small"
            type="email"
            name="email"
            placeholder={this.state.email}
            onChange={this.handleChange}
            variant="outlined"
            fullWidth
            color="secondary"
            margin="normal"
            size="small"
          />
            
            <TextField
            label="Contact Number"
            id="outlined-size-small"
            type="text"
            name="contact"
            placeholder={this.state.contact}
            onChange={this.handleChange}
            variant="outlined"
            fullWidth
            color="secondary"
            margin="normal"
            size="small"
          />

          <TextField
            label="Customer Address"
            id="outlined-size-small"
            type="text"
            name="address"
            placeholder={this.state.address}
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
            label="Select Restaurant Location"
            name="location"
            type="text"
            onChange={this.handleChange}
            variant="outlined"
            fullWidth
            color="secondary"
            margin="normal"
            size="small"
          >
            
            {
                this.state.reslist.map(data => 
                    <MenuItem key={data.id} value={data.address}>
                        {data.address}
                    </MenuItem>
                )
            }
           
          </TextField>

          <TextField
            id="outlined-size-small"
            select
            label="Select Category"
            name="category"
            type="text"
            onChange={this.handleChange}
            variant="outlined"
            fullWidth
            color="secondary"
            margin="normal"
            size="small"
          >
            {

                this.state.list.map((item,i) => 
                    <MenuItem key={item.id} value={item.id}>
                        {item.id}
                    </MenuItem>
                )
            }
           
          </TextField>

          <TextField
            id="outlined-size-small"
            select
            label="Select Restaurant"
            name="restaurant"
            type="text"
            onChange={this.handleChange}
            variant="outlined"
            fullWidth
            color="secondary"
            margin="normal"
            size="small"
          >
            
            {
                this.state.category? (this.state.reslist.filter(data => {
                        if(this.state.category == null && this.state.category==null)
                            return data
                        else if(data.categoryId == this.state.category && data.address == this.state.location){
                            return data
                    
                    }
                }).map(data => 
                    <MenuItem key={data.id} value={data.name}>
                        {data.name}
                    </MenuItem>
                )
                ):<option>Please Select Your Location And Category First..</option>
            }
           
          </TextField>

          <TextField
            id="outlined-size-small"
            select
            label="Select Timings"
            name="time"
            type="text"
            placeholder={this.state.time}
            onChange={this.handleChange}
            variant="outlined"
            fullWidth
            color="secondary"
            margin="normal"
            size="small"
          >
            

            <MenuItem value="09:30 to 10:30">09:30 to 10:30</MenuItem>
            <MenuItem value="10:30 to 11:30">10:30 to 11:30</MenuItem>
            <MenuItem value="11:30 to 12:30">11:30 to 12:30</MenuItem>
            <MenuItem value="12:30 to 13:30">12:30 to 13:30</MenuItem>
            <MenuItem value="13:30 to 14:30">13:30 to 14:30</MenuItem>
            <MenuItem value="19:00 to 20:00">19:00 to 20:00</MenuItem>
            <MenuItem value="20:00 to 21:00">20:00 to 21:00</MenuItem>
            <MenuItem value="21:00 to 22:00">21:00 to 22:00</MenuItem>
            
           
          </TextField>


        <TextField
            id="date"
            label="Select Visit Date"
            type="date"
            name="date"
            placeholder={this.state.date}
            defaultValue={this.state.date}
            onChange={this.handleChange}
            variant="outlined"
            fullWidth
            color="secondary"
            margin="normal"
            size="small"
            InputLabelProps={{
            shrink: true,
            }}
        />

        <TextField
            label="No. of Seats Required"
            id="outlined-size-small"
            type="number"
            name="seats"
            placeholder={this.state.seats}
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
            label="Parking Required?"
            name="parking"
            type="text"
            placeholder={this.state.parking}
            onChange={this.handleChange}
            variant="outlined"
            fullWidth
            color="secondary"
            margin="normal"
            size="small"
          >
            

            <MenuItem value="YES">YES</MenuItem>
            <MenuItem value="NO">NO</MenuItem>
            
           
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
            Update This Booking
          </Button>
        </Box>
      </Container>
    );
  }
}
