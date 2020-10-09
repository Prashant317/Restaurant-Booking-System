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
            
            oldpass:'',
            newpass:'',
            confirmpass:'',

            list:[],

            error1:'',
            error2:'',
            erroe3:''

            }
                
            this.state.list= JSON.parse( localStorage.getItem('login'));            
            }

    componentDidMount(){
          
        fetch("http://localhost:8080/users/" + this.state.list[0].id)
        .then((resp) => {
            resp.json().then((data) => {
                this.setState({
                    id: data.id,
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

    update = (e) => {
        e.preventDefault();

        if(this.state.oldpass === this.state.password){
            if(this.state.newpass === this.state.confirmpass){
                if(this.state.newpass !== this.state.password){
                        fetch('http://localhost:8080/users/'+ this.state.id, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({id:this.state.id, name:this.state.name, username:this.state.username, password: this.state.newpass, email:this.state.email, contact: this.state.contact, address:this.state.address})
                        }).then((resp) => {
                        resp.json().then((result) => {
                            // console.log(result)
                        alert('Your Password has been Updated')
                        this.setState({
                            newpass:'',
                            confirmpass:'',
                            oldpass:''
                        })
                    })
                })
            }else{
                alert("Old And New Password Cannnot Be Same");
                this.setState({
                    newpass:'',
                    confirmpass:'',
                    oldpass:''
                })

            }}else{
                    alert("New And Confirm Password Does Not Match");
                    this.setState({
                        newpass:'',
                        confirmpass:'',
                        oldpass:''
                    })
            }
        }else{
            alert("Please Enter Your Correct Old Password")
            this.setState({
                    newpass:'',
                    confirmpass:'',
                    oldpass:''
            })
        }
    };


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
        
            <form>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src={require("../media/gal10.jpg")} alt="burger"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                            <h3 style={{color:"red"}}>
                                Change Your Password
                            </h3>
                            
                            <p className="proile-rating">Trusted Customer : <span>Verified <FontAwesomeIcon icon={faCheckCircle} /></span></p>
                            
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <Link to="/profile" className="nav-link line" >My Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/Update/' + this.state.id} className="nav-link line">Edit Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active"  data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Change Password</a>
                                </li>
                            </ul>
                        </div>

                    
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Current Password</label>
                                    </div>
                                    <div className="col-md-6">
                                        <input className="input" style={{width:"100%"}} value={this.state.oldpass} type='password' name='oldpass' onChange={(e) => this.setState({oldpass: e.target.value})} /><br /><br />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <label>New Password</label>
                                    </div>
                                    <div className="col-md-6">
                                        <input className="input" style={{width:"100%"}} value={this.state.newpass} type='password' name='newpass' onChange={(e) => this.setState({newpass: e.target.value})} /><br /><br />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Confirm Password</label>
                                    </div>
                                    <div className="col-md-6">
                                        <input className="input" style={{width:"100%"}} value={this.state.confirmpass} type='password' name='confirmpass' onChange={(e) => this.setState({confirmpass: e.target.value})} /><br /><br />
                                    </div>
                                </div>
                                
                                <input type="submit" value="Update" className="sign" onClick={this.update}/>

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
