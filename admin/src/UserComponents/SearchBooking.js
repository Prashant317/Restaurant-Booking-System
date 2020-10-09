import React from "react";
import { Table, Container, Form , Button} from "react-bootstrap";
import { Link, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import "../App.css";
import { CircularProgress } from "@material-ui/core";

export default class SearchBooking extends React.PureComponent {
  state = {
    data: '',
    list:[],
    list2:[],   

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

  componentDidMount(){

    fetch("http://localhost:8080/currentBookings").then((resp) => {
        resp.json().then((data) => {
          // console.log(data)
          this.setState({
            list: data,
          });
        });
      });
      
    
    fetch("http://localhost:8080/completedBookings").then((resp) => {
        resp.json().then((data) => {
          // console.log(data)
          this.setState({
             list2: data
          });
        });
      });
  }

  data = (e) => {
      this.setState({
          data: e.target.value
      })

  }

  refresh = () => {

    fetch("http://localhost:8080/currentBookings").then((resp) => {
        resp.json().then((data) => {
          // console.log(data)
          this.setState({
            list: data,
          });
        });
      });

    fetch("http://localhost:8080/completedBookings").then((resp) => {
      resp.json().then((data) => {
        // console.log(data)
        this.setState({
          list2: data,
        });
      });
    });
  };


  deleteHandler = (id) => {
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

  deletecomp = (id) => {
    // console.log(key)
    
    fetch("http://localhost:8080/completedBookings/" + id, {
      method: "DELETE",
      // headers: {
      //     'Content-Type': 'application/json'
      // },
      body: JSON.stringify(this.state.list2),
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
          //console.log(result)
          alert("This Booking has been Deleted");
          this.refresh();
        });
      });

    
  };


  render() {
    return (
      <Container>
        <h1 style={{ color: "blue", fontSize: "50px" }}>Welcome Admin</h1>
        <br />
        <h3 className="search">Search For Booking</h3>
        <Form.Control type="number" placeholder="Please Enter The Booking Id..." onChange={this.data} />
        
        <br/><br/>
        <h4 style={{ color: "blue" }}>Pending Booking</h4>

        <div>
        {
          this.state.data ? (
            <div>
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
                    <th>Timings</th>
                    <th>Date</th>
                    <th>Seats</th>
                    <th>Parking</th>
                  </tr>
                </thead>
                <tbody>

                    {
                        this.state.list.filter(item => {
                            if(this.state.data == null)
                                return item
                            else if(item.id == this.state.data){
                                return item
                        
                        }
                         }).map(item => 
                            <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.userId}</td>
                           
                            <td>
                            <Link to={"/updateCurrentBooking/" + item.id}>
                                <FontAwesomeIcon icon={faEdit} />
                            </Link>
                           
                            <span onClick={this.deleteHandler.bind(this, item.id)}>                            
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
                        )
                        
                    }

                </tbody>
              </Table>
            </div>
          ) : 
            <div>
              {" "}
              <br />
              <h3 style={{color:"red"}}>Please Wait..</h3>
              <br />
              <CircularProgress size={40} thickness={6} color="primary" />
            </div>
      }
        <br/><br/><br/>
        <h4 style={{ color: "blue" }}>Completed Booking</h4>

        {
          this.state.data ? (
            <div>
              <Table striped bordered hover>
                <thead className="thead-dark">
                  <tr>
                    <th>Operation</th>
                    <th>Booking Id</th>
                    <th>User Id</th>
                    <th>Status</th>
                    <th>Message by Restaurant</th>
                    <th>Feedback by Customer</th>
                    
                  </tr>
                </thead>
                <tbody>

                    {
                        this.state.list2.filter(item => {
                            if(this.state.data == null)
                                return item
                            else if(item.bookingId == this.state.data){
                                return item
                        
                        }
                         }).map(item => 
                            <tr key={item.id}>

                            <td>    
                                <span onClick={this.deletecomp.bind(this, item.id)}>
                                    <FontAwesomeIcon icon={faTrash} color="red" />
                                </span>
                            </td>

                            <td>{item.bookingId}</td>
                            <td>{item.userId}</td>
                            <td><p style={{color:"green", fontSize:"16px", fontWeight:"bold"}}>COMPLETED</p></td>
                            <td>{item.message}</td>
                            <td>{item.feedback}</td>

                        </tr>
                        )
                        
                    }

                </tbody>
              </Table>
            </div>
          ) : 
            <div>
              {" "}
              <br />
              <h3 style={{color:"red"}}>Please Wait..</h3>
              <br />
              <CircularProgress size={40} thickness={6} color="primary" />
            </div>
        }
        </div>
      </Container>
    );
  }
}
