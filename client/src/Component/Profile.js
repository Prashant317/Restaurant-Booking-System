import React, { Component } from 'react'
import  '../CSS/profile.css' 
import Navbar2 from './Navbar2'
import Footer from './Footer'
import { Breadcrumb } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

export default class Profile extends Component {

    constructor(props){
        super(props)
        this.state={
            id:'',
            name:'',
            username:'',
            password:'',
            email:'',
            contact:'',
            address:'',
            list:[]
            }
                
            this.state.list= JSON.parse( localStorage.getItem('login'));            
            }

    componentDidMount(){
           
        fetch("http://localhost:8080/users/" + this.state.list[0].id)
        .then((resp) => {
            resp.json().then((data) => {
                this.setState({
                    id:data.id,
                    name: data.name,
                    username: data.username,
                    password: data.password,
                    email: data.email,
                    contact: data.contact,
                    address: data.address,
                })
            })
        })
    }

    render() { 

        return (
            <div className="profile">
                <Navbar2/>
                <Breadcrumb>
                     <Breadcrumb.Item href="/"><h5 className="bread">Home</h5></Breadcrumb.Item>
                        <Breadcrumb.Item href="/profile">
                            <h5 className="bread">Profile</h5>
                        </Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb>

            <div className="container emp-profile">
        
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src={require("../media/gal10.jpg")} alt="burger"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                            <h5>
                                {this.state.name}
                            </h5>

                            <h6>
                            {this.state.email}
                            </h6>
                            <p className="proile-rating">Trusted Customer : <span>Verified <FontAwesomeIcon icon={faCheckCircle} /></span></p>
                            
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">My Profile</a>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/Update/' + this.state.id} className="nav-link line">Edit Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/password" className="nav-link line" >Change Password</Link>
                                </li>
                            </ul>
                        </div>

                    
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>User Id</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{this.state.id}</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <label>User Name</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{this.state.username}</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Name</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{this.state.name}</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Email</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{this.state.email}</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Phone</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{this.state.contact}</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Address</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{this.state.address}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </form>           
        </div>
        <Footer/>
        </div>
        )
    }
}
