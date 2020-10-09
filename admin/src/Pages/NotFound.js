import React, { Component } from 'react'
import '../App.css'
import {Link} from 'react-router-dom'

export default class NotFound extends Component {
    render() {
        return (
            <div>
                <div className="error">404</div>
                <h2 className="notFound">Page Not Found</h2>
                <br/>
                <p>Sorry, we couldn't find this page requested by you.</p>
                
                <p>But you can reach our <Link to="/">Homepage</Link></p>
            </div>
        )
    }
}
