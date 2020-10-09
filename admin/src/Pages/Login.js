import React, { Component } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  CircularProgress,
  Button
} from "@material-ui/core";
import logo from "../media/logo.PNG";


export default class Login extends Component {

  constructor(props) {
      super(props)
  
      this.state = {
           email:"",
           password:"",
           list:null,
           show_progress:false,
           email_error:null,
           password_error:null
      };


      fetch('http://localhost:8080/login').then((resp) => {
        resp.json().then((data) => {
            this.setState({
                list:data
            })
        })
    })

      this.handleChange = this.handleChange.bind()
      this.login = this.login.bind()
  }
  


  handleChange = (e)=>{
      this.setState({
          [e.target.name]:e.target.value
      })
  }

  login = ()=>{
    let valid_data = true;
    this.setState({
      email_error:null,
      password_error:null
    })

    if(this.state.email===""){
      this.setState({
        email_error:"Required!"
      })
        valid_data=false;
    }
    if(this.state.password===""){
      this.setState({
        password_error:"Required!"
      })
        valid_data=false;
    }
    this.setState({
        update:true
    })

    if(valid_data){
      this.setState({
        show_progress:true
      })

      fetch('http://localhost:8080/login?q=' + this.state.email).then((resp) => {
        resp.json().then((data) => {
             //console.log('Result',data);

                let a,b;
                this.state.list.map((item, i) =>

                <div key={item.id}>
                    {
                     a = item.email
                     }
                     {
                         b=item.password
                     }
                </div>
            
            )

            if(a===this.state.email && b===this.state.password) {
              this.setState({
                show_progress:false
              })
                localStorage.setItem("login",JSON.stringify(data))
                console.log(this.props.history.push("/"))
            }
            else {
              this.setState({
                show_progress:true
              })
                alert('Oops!!! You Are Not An Admin')
            }   
        })
    })
    }
  }

  render() {
    return (
      <Container maxWidth="sm">
        <br/><br/>
        <h3 className="head">Welcome Back!! Please Sign In To Continue...</h3>
        <Box
          bgcolor="white"
          boxShadow="2"
          borderRadius="12px"
          textAlign="center"
          p="24px"
          mt="50px"
        >
          <img src={logo} height="50px" alt="logo" />
          <Typography variant="h5" color="textSecondary">
            ADMIN
          </Typography>

          <TextField
            label="Email"
            type="email"
            name="email"
            onChange={this.handleChange}
            error={this.state.email_error!=null}
            helperText={this.state.email_error}
            variant="outlined"
            fullWidth
            color="secondary"
            margin="normal"
            size="small"
          />

          <TextField
            label="Password"
            type="password"
            name="password"
            error={this.state.password_error!=null}
            helperText={this.state.password_error}
            onChange={this.handleChange}
            variant="outlined"
            fullWidth
            color="secondary"
            margin="normal"
            size="small"
          />

          <br />
          <br />

          {
          this.state.show_progress?
          <CircularProgress size={24} thickness={4} color="primary" />
          :null
          }

          <br />
          <br />
          <Button disableElevation variant="contained" color="primary" fullWidth onClick={this.login}>
            Login
          </Button>
        </Box>
      </Container>
    );
  }
}
