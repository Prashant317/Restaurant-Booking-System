import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

export default class Base extends Component {
    render() {
        return (
            <div>
                {
                localStorage.getItem("login") ?
                (
                <div>
                    <h1 style={{ color: "blue", fontSize: "50px", marginTop: "20%" }}>
                        Welcome To The Admin Portal
                    </h1>
                    <br />
                    <h4 style={{ color: "red", fontSize: "25px" }}>
                        What Changes Are You Planning To Make?
                    </h4>
                    <br /> 
              </div>
              )
              :
               <Redirect to="Login" />
              }
            </div>
        )
    }
}
