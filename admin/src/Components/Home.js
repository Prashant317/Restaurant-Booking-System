import React, { Component } from "react";
import restro from "../media/home.png";
export default class Home extends Component {
  render() {
    return (
      <div>
        
          <h1 style={{ color: "blue", fontSize: "50px" }}>Welcome Admin</h1>
          <br /> 

        <h3 className="head">What You Have In Your Mind Today!!!</h3>
        <img src={restro} height="600px" style={{ align: "center" }} alt="logo"/>
      </div>
    );
  }
}
