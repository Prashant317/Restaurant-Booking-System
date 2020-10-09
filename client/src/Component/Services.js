import React, { Component } from 'react'
import Navbar2 from './Navbar2'
import Footer from './Footer'
import { Breadcrumb, Button } from 'react-bootstrap';
import '../CSS/style.css'

export default class Services extends Component {

    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            contact:'',
            address:'',
            category:'',
            restaurant:'',
            location:'',
            time:'',
            date: new Date(),
            seats:'',
            parking:'',
            userId:'',

            list:[], //for category
            list2:[], // for userId session
            reslist:[],  // for restaurant

            dialog: false,
            push: false
        }
        
        this.state.list2= JSON.parse( localStorage.getItem('login'));  
        this.state.userId = this.state.list2[0].id     
        
        //to fetch categories
        fetch('http://localhost:8080/categories').then((resp) => {
            resp.json().then((data) => {
                this.setState({
                    list:data
                })
            })
        })

        //to fetch restaurants
        fetch(`http://localhost:8080/restaurant`).then((resp) => {
            resp.json().then((data) => {
                this.setState({
                    reslist:data
                })
            })
        })
    }

    
    submit = (e) => {
        e.preventDefault();

       
        fetch('http://localhost:8080/currentBookings', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userId:this.state.userId, name:this.state.name, email:this.state.email, contact:this.state.contact, address:this.state.address, category:this.state.category, restaurant:this.state.restaurant, location:this.state.location, time:this.state.time, date:this.state.date, seats:this.state.seats, parking:this.state.parking})
        }).then((resp) => {
            resp.json().then((result) => {
             console.log(result)
                
                this.setState({
                    dialog: true
                })

                //this.props.history.push("/MyBookings")
            })
        })
    
}



    render() {

        return (

            <div>

            <div className="main">
    
                <Navbar2/>
                <Breadcrumb>
                     <Breadcrumb.Item href="/"><h5 className="bread">Home</h5></Breadcrumb.Item>
                        <Breadcrumb.Item href="/service">
                            <h5 className="bread">Services</h5>
                        </Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb>


                    <div className="container form-content">		
                    <div className="header_content">
                        <h2> Book Your Table </h2>
                    </div>
                    
                    <div className="card col-md-6 main-form">
                        <div className="card-header">
                            <h3 className="mt-2" style={{color:"red"}}> Booking Form  </h3>
                        </div>
                        <div className="card-body">
                            <form className="form row">

                                <div className="form-group col-md-12">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" name="name" onChange={(e) => this.setState({name: e.target.value})}  required/>
                                </div>

                                <div className="form-group col-md-12">
                                    <label htmlFor="email">Email Id </label>
                                    <input type="email" className="form-control" name="email" onChange={(e) => this.setState({email: e.target.value})}  required/>
                                </div>
                                
                                <div className="form-group col-md-12">
                                    <label htmlFor="contact"> Mobile No. </label>
                                    <input type="text" className="form-control" name="contact" onChange={(e) => this.setState({contact: e.target.value})} required/>
                                </div>

                                <div className="form-group col-md-12">
                                    <label htmlFor="contact"> Your Address </label>
                                    <input type="text" className="form-control" name="address" onChange={(e) => this.setState({address: e.target.value})} required/>
                                </div>


                                <div className="form-group col-md-12">
                                <label>Select Restaurant Location</label>
                                
                                <select name="address" className="form-control" onChange={(e) => this.setState({location: e.target.value})}>
                                        <option>Select Location..</option>

                                                {

                                                    this.state.reslist.map(data => 
                                                        <option>
                                                            {data.address}
                                                        </option>
                                                    )
                                                }
                                        
                                </select>
                                </div>
                    
                                <div className="form-group col-md-12">
                                <label>Select Your Category</label>
                                <select name="category" className="form-control" value={this.state.category} onChange={(e) => this.setState({category: e.target.value})} required>
                                        <option>Select Option..</option>
                                       {

                                           this.state.list.map((item,i) => 
                                               <option key={item.id}>
                                                   {item.id}
                                               </option>
                                            
                                           )
                                       }
                                </select>
                                </div>
                                       

                                <div className="form-group col-md-12">
                                <label>Select Your Restaurant</label>
                                <select name="restaurant" className="form-control" onChange={(e) => this.setState({restaurant: e.target.value})}>
                                        <option>Select Restaurant..</option>

                                                {
                                                    this.state.category? (this.state.reslist.filter(data => {
                                                            if(this.state.category == '' && this.state.location=='')
                                                                return null
                                                            else if(data.categoryId==this.state.category && data.address==this.state.location){
                                                                return data
                                                        
                                                        }
                                                    }).map(data => 
                                                        <option>
                                                            {data.name}
                                                        </option>
                                                    )
                                                    ):<option>Please Select Your Location And Category First..</option>
                                                }
                                        
                                </select>
                                </div>

                                <div className="form-group col-md-6">
                                    <label htmlFor="uname1">Select Your Time Slot</label>
                                    <select name="time" className="form-control" onChange = {(e) => this.setState({time: e.target.value})}>
                                        <option>Select Time..</option>

                                        <option>09:30  to 10:30</option>
                                        <option>10:30 to 11:30</option>
                                        <option>11:30 to 12:30</option>
                                        <option>12:30 to 13:30</option>
                                        <option>13:30 to 14:30</option>
                                        <option>19:00 to 20:00</option>
                                        <option>20:00 to 21:00</option>
                                        <option>21:00 to 22:00</option>

                                </select>
                                </div>

                                <div className="form-group col-md-6">
                                    <label htmlFor="date">Select Booking Date</label>
                                    <input type="date" className="form-control" value={this.state.date} placeholder={this.state.date} name="date" onChange={(e) => this.setState({date: e.target.value})}/>
                                </div>

                                <div className="form-group col-md-6">
                                    <label htmlFor="seats">Enter Required Seats</label>
                                    <input type="number" className="form-control" value={this.state.seats} placeholder={this.state.seats} name="seats" onChange={(e) => this.setState({seats: e.target.value})} required/>
                                </div>

                                <div className="form-group col-md-6">
                                    <label htmlFor="parking">Parking Required</label>
                                    <select name="parking" className="form-control" onChange = {(e) => this.setState({parking: e.target.value})}>
                                        <option>Select Choice..</option>

                                        <option>YES</option>
                                        <option>NO</option>

                                </select>
                                </div>     

                                <div className="header_content">
                                    {
                                        this.state.dialog? (
                                            <div className="dialog">
                                            <h3 style={{textAlign:"center", color:"white"}}>Great, Your Table Has Been Booked</h3>
                                            <button className="butnn" onClick={(e)=>{this.setState({dialog:false, push: true})}}>
                                                Click To Proceed
                                            </button>
                                        </div>
                                        ):null

                                    }  
                                    {
                                        this.state.push?(this.props.history.push("/myBookings")):null
                                    }
                                </div>                      

                                <Button type="submit" className="btn btn-success btn-lg col-md-6 "onClick={this.submit}> Submit </Button>
                            </form>
                        </div>
                    </div>

                           

                        
                </div>

        <Footer/>
        </div>
        </div>
        )
    }
}
