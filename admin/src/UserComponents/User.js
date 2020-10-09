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
    fetch("http://localhost:8080/users").then((resp) => {
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
    fetch("http://localhost:8080/users/" + key, {
      method: "DELETE",
      // headers: {
      //     'Content-Type': 'application/json'
      // },
      body: JSON.stringify(this.state),
    }).then((resp) => {
      resp.json().then((result) => {
        // console.log(result)
        alert("User has been Deleted");
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
              Dear Admin Here We Have Our All Users
            </h3>
            <br />
            <Table striped bordered hover>
              <thead className="thead-dark">
                <tr>
                  <th>User Id</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Address</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody>
                {this.state.list.map((item, i) => (
                  <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.password}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                    <td>{item.address}</td>

                    <td>
                      <Link to={"/UpdateUser/" + item.id}>
                        <FontAwesomeIcon icon={faEdit} color="blue" />
                      </Link>
                      <span onClick={() => this.delete(item.id)}>
                        <FontAwesomeIcon icon={faTrash} color="red" />
                      </span>
                    </td>
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
