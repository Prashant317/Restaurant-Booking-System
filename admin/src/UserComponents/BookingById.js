import React from "react";
import "../App.css";
import { Table, Button } from "react-bootstrap";
import { Link, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { CircularProgress } from "@material-ui/core";
import UpdateRestro from "./UpdateUser";

export default class BookingById extends React.PureComponent {
  state = {
    list: null,
    bookingId:'',
    userId:'',
    message:'',
    feedback:'',
    name:'',
    email:'',
    category:'',
    restaurant:'',
    contact:'',
    address:'',
    location:'',
    time:'',
    date:'',
    seats:'',
    parking:''
  };
  componentDidMount() {
    this.refresh();
  }

  refresh = () => {
    fetch("http://localhost:8080/users/" + this.props.match.params.id + "/currentBookings").then((resp) => {
      resp.json().then((data) => {
        // console.log(data)
        this.setState({
          list: data,
        });
      });
    });
  };


  delete = (id) => {
    // console.log(key)
    fetch("http://localhost:8080/currentBookings/" + id, {
      method: "DELETE",
      // headers: {
      //     'Content-Type': 'application/json'
      // },
      body: JSON.stringify(this.state.list),
    }).then((resp) => {
      resp.json().then((result) => {
        // console.log(result)
        alert("This Booking has been Deleted");
        this.refresh();
      });
    });
  };


  completed = (id, userId, name, res) => {

    let m = "Thanks dear " + name + " for visiting " + res + ". We hope we have fullfilled your dining properly. See you soon"
    this.state.bookingId = id
    this.state.userId = userId
    this.state.message = m

    //adding data to completed bookings
    fetch("http://localhost:8080/completedBookings", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({bookingId:this.state.bookingId, userId:this.state.userId, message:this.state.message, feedback:this.state.feedback}),
    }).then((resp) => {
      resp.json().then((result) => {
        // console.log(result)
        alert("Booking Has Been Marked As Completed");
      });
    });

    //Now delete this completed booking from this table current bookings

    fetch("http://localhost:8080/currentBookings/" + id, {
        method: "DELETE",
        // headers: {
        //     'Content-Type': 'application/json'
        // },
        body: JSON.stringify(this.state.list),
      }).then((resp) => {
        resp.json().then((result) => {
          console.log(result)
          alert("This Booking has been Deleted");
          this.refresh();
        });
      });
    
  };

  render() {
    return (
      <div>
        <h1 style={{ color: "blue", fontSize: "50px" }}>Welcome Admin</h1>
        <br />
        {this.state.list ? (
          <div>
            <h3 className="head">
              Dear Admin Here We Have All Bookings From Our All Users
            </h3>
            <br />
            <Table striped bordered hover>
              <thead className="thead-dark">
                <tr>
                  <th>Booking Id</th>
                  <th>User Id</th>
                  <th>Operation</th>
                  <th>Completed?</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Address</th>
                  <th>Category</th>
                  <th>Restaurant</th>
                  <th>Location</th>
                  <th>Timing</th>
                  <th>Date</th>
                  <th>Seats</th>
                  <th>Parking</th>
                
                </tr>
              </thead>
              <tbody>
                {this.state.list.map((item, i) => (
                  <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.userId}</td>
                    
                    <td>
                      <Link to={"/updateCurrentBooking/" + item.id}>
                        <FontAwesomeIcon icon={faEdit} color="blue" />
                      </Link>
                      <span onClick={() => this.delete(item.id )}>
                        <FontAwesomeIcon icon={faTrash} color="red" />
                      </span>
                    </td>
                    <td><Button className="link" style={{color:"white" ,backgroundColor:"green"}} onClick={() => this.completed(item.id, item.userId, item.name, item.restaurant )}>
                        YES?
                      </Button>
                    </td>

                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                    <td>{item.address}</td>
                    <td>{item.category}</td>
                    <td>{item.restaurant}</td>
                    <td>{item.location  }</td>
                    <td>{item.time}</td>
                    <td>{item.date}</td>
                    <td>{item.seats}</td>
                    <td>{item.parking}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <h3 style={{ color: "red" }}>
            Please Wait ...
            <br />
            <br />
            <br />
            <CircularProgress size={40} thickness={8} color="primary" />
          </h3>
        )}

      </div>
    );
  }
}
