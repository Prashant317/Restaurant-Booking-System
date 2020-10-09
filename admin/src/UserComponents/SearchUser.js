import React from "react";
import { Table, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import { CircularProgress } from "@material-ui/core";

export default class SearchUser extends React.PureComponent {
  state = {
    data: '',
    list:[],
    noDataFound: true,
  };

  componentDidMount(){
    fetch("http://localhost:8080/users").then((resp) => {
        resp.json().then((data) => {
          // console.log(data)
          this.setState({
            list: data,
          });
        });
      });
  }

  refresh = () => {
    fetch("http://localhost:8080/users").then((resp) => {
      resp.json().then((data) => {
        // console.log(data)
        this.setState({
          list: data,
        });
      });
    });
  };
 
  deleteHandler = (id) => {
    fetch("http://localhost:8080/users/" + id, {
      method: "DELETE",
      // headers: {
      //     'Content-type': 'application/json'
      // },
      body: JSON.stringify(this.state),
    }).then((resp) => {
      resp.json().then((result) => {
        // console.log(result);
        alert("User has been Deleted");
        this.refresh()
      });
    });
  };

  render() {
    return (
      <Container>
        <h1 style={{ color: "blue", fontSize: "50px" }}>Welcome Admin</h1>
        <br />
        <h1 className="search">User Search</h1>
        <Form.Control type="text" placeholder="Enter Name Or Username To Be Searched..." onChange={(e)=>{this.setState({data:e.target.value})}} />
        <div>
        {
          this.state.data ? (
            <div>
              <Table striped bordered hover>
                <thead className="thead-dark">
                  <tr>
                    <th>User Id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Contact No.</th>
                    <th>Address</th>
                    <th>Operation</th>
                    <th>All Bookings</th>
                  </tr>
                </thead>
                <tbody>

                    {
                        this.state.list.filter(item => {
                                if(this.state.data == null)
                                    return item
                                else if(item.name.toLowerCase().includes(this.state.data.toLowerCase()) || item.username.toLowerCase().includes(this.state.data.toLowerCase())){
                                    return item
                            
                            }
                        }).map(item => 
                            <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.contact}</td>
                            <td>{item.address}</td>
                            <td>
                            <Link to={"/UpdateUser/" + item.id}>
                                <FontAwesomeIcon icon={faEdit} />
                            </Link>
                            <span
                                onClick={this.deleteHandler.bind(this, item.id)}
                            >
                                <FontAwesomeIcon icon={faTrash} color="red" />
                            </span>
                            </td>
                            <td>
                            <Link to={"/bookingsById/" + item.id} className="link" style={{color:"green", fontSize:"18px"}}>Click To Check</Link>
                            </td>
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
