import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';


class Logout extends Component {

    componentDidMount() {
        localStorage.clear()
    }

    render() {
        
        return(
            <div>
                <Redirect to = "./login"/>  
            </div>
        );                  
        
    }
}

export default Logout;
