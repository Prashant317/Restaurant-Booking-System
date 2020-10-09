import React from "react";
import { Table, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import { CircularProgress } from "@material-ui/core";

export default class RestaurantsSearch extends React.PureComponent {
  state = {
    searchData: null,
    noDataFound: true,
    lastSearch: "",
  };
  search = (e) => {
    this.setState({
      lastSearch: e.target.value,
    });
    // let key = e.target.value
    // this.setState({
    //     lastSearch: key
    // })
    if (this.state.lastSearch.length > 0) {
      fetch("http://localhost:8080/restaurant?q=" + e.target.value).then(
        (resp) => {
          resp.json().then((result) => {
            // console.log('result', result)
            if (result.length > 0 && this.state.lastSearch.length > 0) {
              this.setState({
                searchData: result,
                noDataFound: false,
              });
            }
          });
        }
      );
    } else {
      this.setState({
        noDataFound: true,
        searchData: null,
      });
    }
  };
  deleteHandler = (id) => {
    fetch("http://localhost:8080/restaurant/" + id, {
      method: "DELETE",
      // headers: {
      //     'Content-type': 'application/json'
      // },
      body: JSON.stringify(this.state),
    }).then((resp) => {
      resp.json().then((result) => {
        // console.log(result);
        alert("Resturant has been Deleted");
        this.search({
          target: {
            value: this.state.lastSearch,
          },
        });
      });
    });
  };
  render() {
    return (
      <Container>
        <h1 style={{ color: "blue", fontSize: "50px" }}>Welcome Admin</h1>
        <br />
        <h1 className="search">Restaurants Search</h1>
        <Form.Control type="text" placeholder="Search" onChange={this.search} />
        <div>
          {this.state.searchData ? (
            <div>
              <Table striped bordered hover>
                <thead className="thead-dark">
                  <tr>
                    <th>Serial No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Rating</th>
                    <th>Category</th>
                    <th>Operation</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.searchData.map((item, i) => {
                    return (
                      // <div key={i} className='search-div'>{item.name}</div>
                      <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.address}</td>
                        <td>{item.Rating}</td>
                        <td>{item.categoryId}</td>
                        <td>
                          <Link to={"/Update/" + item.id}>
                            <FontAwesomeIcon icon={faEdit} />
                          </Link>
                          <span
                            onClick={this.deleteHandler.bind(this, item.id)}
                          >
                            <FontAwesomeIcon icon={faTrash} color="red" />
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          ) : this.state.noDataFound ? (
            <div>
              {" "}
              <br />
              <h3>Searching... Please Wait</h3>
              <br />
              <CircularProgress size={40} thickness={6} color="primary" />
            </div>
          ) : (
            <div> null</div>
          )}
        </div>
      </Container>
    );
  }
}
