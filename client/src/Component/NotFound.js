import React, { Component } from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar2'

export default class NotFound extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                    <div className="error">404</div>
                    <h2 className="notFound">Page Not Found</h2>
                    <br/>
                    <p style={{textAlign:"center"}}>Sorry, we couldn't find this page requested by you.</p>
                    
                    <p style={{textAlign:"center"}}>But you can reach our <Link to="/">Homepage</Link></p>

                <Footer/>
            </div>
        )
    }
}
