import React, { Component } from 'react'
import '../CSS/Login.css'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import Navbar1 from './Navbar1'
import Footer from './Footer'

export default class Login extends Component {

    constructor(props){
        super(props)
        this.state = {
            user: null,
            password: null,
            list: null,
            error1:null,
        }
        let val = localStorage.getItem('login')
        if(val!=null){
            this.props.history.push("/")
        }
    }
    

    componentDidMount(){

      fetch('http://localhost:8080/users').then((resp) => {
        resp.json().then((data) => {
        
            this.setState({
                list:data
            })
        })
    })
    }

    login = () => {

        if(this.state.user===null || this.state.password===null){

            this.setState({
                error1: "This Field Cannot Be Empty *"
            
            })

        }else{
        fetch('http://localhost:8080/users?q=' + this.state.user).then((resp) => {
            resp.json().then((data) => {


              let a=[];
              let b=[];
              this.state.list.map((item, i) =>

              <div key={item.id}>
                  {
                      a.push(item.username)
                   }
                   {
                       b.push(item.password)
                   } 
                   
              </div>
          
          )
                   
          let flag=1;
          for(let i=0;i<a.length;i++){
              if(a[i]===this.state.user && b[i]===this.state.password) {
                  localStorage.setItem("login",JSON.stringify(data))
                  this.props.history.push("/")
                  flag=1;
                  break;
              }
              else {
                  flag=0;
              } 
          }     
            if(flag===0)
            {
              alert('Oops!!! Your Username And Password Does Not Match. ');
            }       
            })
        })
     }
    }  

    render() {

        return (            
            <div>
             
             <Navbar1/>

              <h1 style={{textAlign:"center", marginTop:"2%", color:"red"}}>Welcome To Tamra Restuarant</h1>
              <div className="container register">
                <div className="row">
                    <div className="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3>Welcome To Tamra Restaurant</h3>
                        <p>You are just few seconds away from having your delicious food!</p>
                        
                        <br/><br/>
                        <p style={{marginBottom:"0px", fontWeight:"500"}}>New User? Register Here!</p>
                        <Link to='/signup' className="log"><FontAwesomeIcon icon={faUserPlus} /> SignUp</Link>
                        
                    </div>
                    <div className="col-md-9 register-right" style={{marginTop:"4%"}}>
                        
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading" style={{color:'red', fontWeight:"bold"}}>Welcome Back!!</h3>
                                <div style={{marginLeft:"8%", marginTop:"20%"}}>
                                    <div >
                                    
                                    <input className="input" placeholder="Enter UserName *" type='text' name='user' onChange={(e) => this.setState({user: e.target.value})} /><br /><br />
                                    {(this.state.user==null)?<p style={{color:"red", marginLeft:"12%"}}>{this.state.error1}</p>:null}
                                    
                                    <input className="input" placeholder="Enter Password *" type='password' name='password' onChange={(e) => this.setState({password: e.target.value})} /><br /><br />
                                    {(this.state.password==null)?<p style={{color:"red", marginLeft:"12%"}}>{this.state.error1}</p>:null}

                                    <input type="submit" value="Login" className="sign" onClick={this.login}/>

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
