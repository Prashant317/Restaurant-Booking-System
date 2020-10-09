import React, { Component } from 'react'
import Navbar2 from './Navbar2'
import Footer from './Footer'
import { Breadcrumb, Table, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import '../CSS/style.css'

export default class MyCompletedBookings extends Component {

    constructor(props){
        super(props)
        this.state={
            list:[], //for all bookings of a user
            feedback:'',
            showtextarea: false
        }
        
        this.state.list2= JSON.parse( localStorage.getItem('login'));  
        this.state.userId = this.state.list2[0].id     
        
        

        //to fetch all bookings for a perticular user session
        fetch(`http://localhost:8080/users/${this.state.userId}/completedBookings`).then((resp) => {
            resp.json().then((data) => {
                this.setState({
                    list:data
                })
            })
        })
    }

    refresh = () => {
        fetch(`http://localhost:8080/users/${this.state.userId}/completedBookings`).then((resp) => {
            resp.json().then((data) => {
                // console.log(data)
                this.setState({
                    list: data
                })
            })
        })
    }

    submit = () => {
        this.state.showtextarea ? this.setState({showtextarea: false}) : this.setState({showtextarea: true })
    }

    handleSubmit = (id, bookingId, message, userId) => {
    
       fetch('http://localhost:8080/completedBookings/'+ id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id:id, bookingId:bookingId, userId:userId, message:message, feedback: this.state.feedback})
            }).then((resp) => {
            resp.json().then((result) => {
                 console.log(result)
                alert('Thankyou, Your Feedback has been Submitted')
                this.refresh()
            })
        })
    }

    

    delete = (key) => {
        // console.log(key)
        fetch('http://localhost:8080/completedBookings/' + key, {
            method: 'DELETE',
            // headers: {
            //     'Content-Type': 'application/json'
            // },
            body: JSON.stringify(this.state)
        }).then((resp) => {
            resp.json().then((result) => {
                // console.log(result)
                alert('Okay, Your Booking History For This Dining Has Been Deleted!! We Hope For A New Booking Soon..')
                this.refresh()
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
                        <h2> My Completed Bookings</h2>
                    </div>
                    
                    <div className="card col-md-14">
                        <div className="card-header">
                            <h3 className="mt-2" style={{color:"red"}}> My Booking History </h3>
                        </div>
                        <div className="card-body table">
                            <div >
                                
                                 {
                                     this.state.list ?
                                     <div className="table">
                                         <Table striped bordered hover className="table">
                                             <thead className="table" style={{backgroundColor:"black", color:"white"}}>
                                                 <tr>
                                                     <th>Operation</th>
                                                     <th>Booking_Id</th>
                                                     <th>Greeting From Restaurant</th>
                                                     <th>Please Provide Your Valuable Feedback</th>
                                                 </tr>
                                             </thead>
                                             <tbody>
                                                 {
                                                     this.state.list.map((item, i) =>
                                                         <tr key={i}>
                                                             <td>
                                                                 <span onClick={() => this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color='red'/></span>
                                                                 {/* onClick={this.deleteHandler.bind(this, item.id) */}
                                                             </td>
                                                             <td>{item.bookingId}</td>
                                                             <td>{item.message}</td>
                                                             <td>
                                                             <Button className="Primary button" style={{textAlign:"center", marginLeft:"21%", marginTop:"5%"}} onClick={this.submit}>Feedback</Button>
                                                             <br/>
                                                             {this.state.showtextarea?(
                                                                <Form>
                                                                    <br/>
                                                                    <textarea placeholder={item.feedback} style={{width:"100%",height:"100px", color:"white", backgroundColor:"#660000"}} onChange={(e)=>{this.setState({feedback: e.target.value})}}></textarea>
                                                                    <button className="butn" onClick={this.handleSubmit.bind(this, item.id, item.bookingId, item.message, item.userId)}>Submit</button>
                                                                </Form>
                                                                ):null
                                                              }

                                                             </td>
                                                         </tr>
                                                     )
                                                 }
                                             </tbody>
                                         </Table>
                                     </div>
                                     :
                                     <p>Please Wait ...</p>
                                 }                     

                            </div>
                        </div>
                    </div>
                </div>

        <Footer/>
        </div>
        </div>
        )
    }
}
