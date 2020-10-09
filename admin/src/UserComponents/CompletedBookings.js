import React from "react";
import "../App.css";
import { Table } from "react-bootstrap";
import { Link, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { CircularProgress } from "@material-ui/core";
import UpdateRestro from "./UpdateUser";

export default class User extends React.PureComponent {
  state = {
    list: null,
  };

  componentDidMount() {
    this.refresh();
  }

  refresh = () => {
    fetch("http://localhost:8080/completedBookings").then((resp) => {
      resp.json().then((data) => {
        // console.log(data)
        this.setState({
          list: data,
        });
      });
    });
  };

  delete = (key) => {
    // console.log(key)
    fetch("http://localhost:8080/completedBookings/" + key, {
      method: "DELETE",
      // headers: {
      //     'Content-Type': 'application/json'
      // },
      body: JSON.stringify(this.state),
    }).then((resp) => {
      resp.json().then((result) => {
        // console.log(result)
        alert("Entry has been Deleted Permanently");
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
              Dear Admin Here We Have All Completed Dinings.
            </h3>
            <br />
            <Table striped bordered hover>
              <thead className="thead-dark">
                <tr>
                  <th>Operation</th>
                  <th>Booking Id</th>
                  <th>User Id</th>
                  <th>Status</th>
                  <th>Message From Restaurant</th>
                  <th>Feedback By Customer</th>
                  
                </tr>
              </thead>
              <tbody>
                {this.state.list.map((item, i) => (
                  <tr key={i}>
                    <td>            
                      <span onClick={() => this.delete(item.id)}>
                        <FontAwesomeIcon icon={faTrash} color="red" />
                      </span>
                    </td>
                    <td>{item.bookingId}</td>
                    <td>{item.userId}</td>
                    <td><p style={{color:"green", fontSize:"16px", fontWeight:"bold"}}>COMPLETED</p></td>
                    <td>{item.message}</td>
                    <td>{item.feedback}</td>

                    
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

        <Route exact path="/UpdateUser/:id">
          <UpdateRestro />
        </Route>
      </div>
    );
  }
}
