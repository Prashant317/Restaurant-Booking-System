import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

export default class Logout extends Component {

    
    constructor(props){
        super(props)
            localStorage.clear("login")   
    }

    render(){   
        return (
            <div>
               <Redirect to="/login"/>
            </div>        
        );
    }
}