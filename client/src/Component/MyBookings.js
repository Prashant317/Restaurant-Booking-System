import React, { Component } from 'react'
import Navbar2 from './Navbar2'
import Footer from './Footer'
import { Breadcrumb, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import '../CSS/style.css'

export default class MyBookings extends Component {

    constructor(props){
        super(props)
        this.state={
            list:[], //for all bookings of a user
        }
        
        this.state.list2= JSON.parse( localStorage.getItem('login'));  
        this.state.userId = this.state.list2[0].id     
        
        

        //to fetch all bookings for a perticular user session
        fetch(`http://localhost:8080/users/${this.state.userId}/currentBookings`).then((resp) => {
            resp.json().then((data) => {
                this.setState({
                    list:data
                })
            })
        })
    }

    refresh = () => {
        fetch(`http://localhost:8080/users/${this.state.userId}/currentBookings`).then((resp) => {
            resp.json().then((data) => {
                // console.log(data)
                this.setState({
                    list: data
                })
            })
        })
    }

    delete = (key) => {
        // console.log(key)
        fetch('http://localhost:8080/currentBookings/' + key, {
            method: 'DELETE',
            // headers: {
            //     'Content-Type': 'application/json'
            // },
            body: JSON.stringify(this.state)
        }).then((resp) => {
            resp.json().then((result) => {
                // console.log(result)
                alert('Okay, Your Booking Has Been Deleted!! We Hope For A New Booking Soon..')
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
                        <h2> My Bookings</h2>
                    </div>
                    
                    <div className="card col-md-14">
                        <div className="card-header">
                            <h3 className="mt-2" style={{color:"red"}}> My Pending Bookings  </h3>
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
                                                     <th>Name</th>
                                                     <th>Email</th>
                                                     <th>Contact</th>
                                                     <th>Address</th>
                                                     <th>Category</th>
                                                     <th>Restaurant</th>
                                                     <th>Location</th>
                                                     <th>Time</th>
                                                     <th>Date</th>
                                                     <th>Seats</th>
                                                     <th>Parking</th>
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
                                                             <td>{item.id}</td>
                                                             <td>{item.name}</td>
                                                             <td>{item.email}</td>
                                                             <td>{item.contact}</td>
                                                             <td>{item.address}</td>
                                                             <td>{item.category}</td>
                                                             <td>{item.restaurant}</td>
                                                             <td>{item.location}</td>
                                                             <td>{item.time}</td>
                                                             <td>{item.date}</td>
                                                             <td>{item.seats}</td>
                                                             <td>{item.parking}</td>
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
