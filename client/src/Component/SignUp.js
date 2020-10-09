import React, { Component } from 'react'
import '../CSS/Login.css'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import NavBar1 from './Navbar1'
import Footer from './Footer'

export default class SignUp extends Component {

    state = {
        name: null,
        username: null,
        password: null,
        email:null,
        contact: null,
        address: null,
        list: [],

        error1:null,  //for password error
        error2:null,  //for mobile no error
        error3:null,  //for empty field error
        error4:null, //for username exist in database
        error5:null  //for email exit in database
    }

    componentDidMount(){
        fetch('http://localhost:8080/users').then((resp) => {
            resp.json().then((data) => {
                this.setState({
                    list:data
                })
            })
        })
        let val = localStorage.getItem('login')
        if(val!=null){
            this.props.history.push("/")
        }
    }


    signup = () => {


        // code logic for checking if username and email already exist
        let x = [];
        let y = [];
        let flag1=1, flag2=1, flag3=1, flag4=1, flag5=1;

        this.state.list.map(item =>{
            return(
            <div key={item.id}>
                {
                    x.push(item.username)
                }
                {
                    y.push(item.email)
                }
            </div>
            )}
        
        )

        for(let i=0;i<x.length;i++){
            if(this.state.username === x[i]){
                this.setState({
                    error4: "This Username Has Already Taken"
                })
                flag4=0
            }
        }
        for(let i=0;i<x.length;i++){
            if(this.state.email === y[i]){
                this.setState({
                    error5: "This Email Address Has Already Taken",
                })
                flag5=0
            }
        }
        // end for username and email logic


        if(this.state.password!==null){
            if(this.state.password.length<8){
                this.setState({
                    error1:"Password length must be greater that or equal to 8 *"
                 })
                flag1=0;
            }
        }
        if(this.state.contact!==null){
            if(this.state.contact.length!==10){
             
                this.setState({
                    error2 :"Contact Number Is Invalid *"
                 })
                flag2=0;
            }
        }

        if(this.state.name===null || this.state.username===null || this.state.password===null || this.state.email===null || this.state.contact===null || this.state.address===null)
        {
            this.setState({
               error3:"This Field Cannot Be Empty *"
            })
            flag3=0;  

        }
        if(flag1===1 && flag2===1 && flag3===1 && flag4===1 && flag5===1){
        fetch('http://localhost:8080/users', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name:this.state.name, username:this.state.username, password:this.state.password, email:this.state.email, contact:this.state.contact, address:this.state.address})
        }).then((resp) => {
            resp.json().then((result) => {
                // console.log(result)
                this.props.history.push("/login")
                alert('Congratulations!! You Are Registered Successfully. Now Go And Please logIn...')
            })
        })
        }
    }  

    render() {

        return (
            <div>
                <NavBar1/>
                
                <h1 style={{textAlign:"center", marginTop:"2%", color:"red"}}>Welcome To Tamra Restuarant</h1>
              <div className="container register">
                <div className="row">
                    <div className="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3>Welcome To Tamra Restaurant</h3>
                        <p>You are just few seconds away from having your delicious food!</p>
                        
                        <br/><br/>
                        <p style={{marginBottom:"0px", fontWeight:"500"}}>Already Registered? Please LogIn!</p>
                        <Link to='/login' className="log"><FontAwesomeIcon icon={faUser} /> LogIn</Link>
                        
                    </div>
                    <div className="col-md-9 register-right" style={{marginTop:"4%"}}>
                        
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading" style={{color:'red', fontWeight:"bold"}}>Register Here</h3>
                                <div style={{marginLeft:"8%", marginTop:"20%"}}>
                                    <div >

                                    <input className="input" placeholder="Enter Name *" type='text' name='name' onChange={(e) => this.setState({name: e.target.value})} /><br /><br />
                                    {(this.state.name==null)?<p style={{color:"red", marginLeft:"12%"}}>{this.state.error3}</p>:null}

                                    <input className="input" placeholder="Enter UserName *" type='text' name='username' onChange={(e) => this.setState({username: e.target.value})} /><br /><br />
                                    {(this.state.username==null)?<p style={{color:"red", marginLeft:"12%"}}>{this.state.error3}</p>:null}
                                    <p style={{color:"red", marginLeft:"12%"}}>{this.state.error4}</p>

                                    <input className="input" placeholder="Enter Password *" type='password' name='password' onChange={(e) => this.setState({password: e.target.value})} /><br /><br />
                                    {(this.state.password==null)?<p style={{color:"red", marginLeft:"12%"}}>{this.state.error3}</p>:null}
                                    <p style={{color:"red", marginLeft:"12%"}}>{this.state.error1}</p>
                                    
                                    <input className="input" placeholder="Enter Email *" type='email' name='email' onChange={(e) => this.setState({email: e.target.value})} /><br /><br />
                                    {(this.state.email==null)?<p style={{color:"red", marginLeft:"12%"}}>{this.state.error3}</p>:null}
                                    <p style={{color:"red", marginLeft:"12%"}}>{this.state.error5}</p>

                                    <input className="input" placeholder="Enter Contact No. *" type='text' name='contact' onChange={(e) => this.setState({contact: e.target.value})} /><br /><br />
                                    {(this.state.contact==null)?<p style={{color:"red", marginLeft:"12%"}}>{this.state.error3}</p>:null}
                                    <p style={{color:"red", marginLeft:"12%"}}>{this.state.error2}</p>
                                     
                                    <input className="input" placeholder="Address *" type='text' name='address' onChange={(e) => this.setState({address: e.target.value})} /><br /><br />
                                    {(this.state.address==null)?<p style={{color:"red", marginLeft:"12%"}}>{this.state.error3}</p>:null}

                                    <input type="submit" value="SignUp" className="sign" onClick={this.signup}/>
                                    
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
                <Footer/>
            </div>
        )
    }
}
