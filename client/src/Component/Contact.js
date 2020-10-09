import React, { Component } from 'react'
import Navbar2 from './Navbar2'
import Footer from './Footer'
import { Breadcrumb, Form } from 'react-bootstrap';
import '../CSS/style.css'

export default class Contact extends Component {

    state = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }

    submit = (e) => {
        e.preventDefault();

        fetch('http://localhost:8080/contact',{
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
        }).then((resp) => {
            resp.json().then((result) => {
                // console.log(result)
                alert('Your Message Has Been Submitted')
                this.setState({  
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                })
            })
        })   
    }


    render() {
        return (
            <div>
                <Navbar2/>

                <Breadcrumb>
                    <Breadcrumb.Item href="/"><h5 className="bread">Home</h5></Breadcrumb.Item>
                    <Breadcrumb.Item href="/contact">
                        <h5 className="bread">Contact Us</h5>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb>


                    <div className="jumbotron jumbotron-sm" style={{backgroundColor:"#4680b9"}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-lg-12">
                                    <h1 className="h1">
                                        Contact us <small>Feel free to ask any query</small></h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="well well-sm">
                                    <form>
                                    <div className="row">
                                        <div className="col-md-6">

                                            <div className="form-group">
                                                <label htmlFor="name">
                                                    Name</label>
                                                    <input className="form-control" placeholder="Enter Your Name *" value={this.state.name} type='text' name='name' onChange={(e) => this.setState({name: e.target.value})} />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="email">
                                                    Email Address</label>
                                                    <input className="form-control" placeholder="Enter Your Email Id *" value={this.state.email} type='text' name='email' onChange={(e) => this.setState({email: e.target.value})} />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="subject">
                                                    Subject</label>
                                                    <Form.Control as="select" placeholder="Select Your Subject" value={this.state.subject} name="subject" onChange={(e) => this.setState({subject: e.target.value})} >
                                                        <option value="Choose one">Choose One:</option>
                                                        <option value="service">General Customer Service</option>
                                                        <option value="suggestions">Suggestions</option>
                                                        <option value="product">Product Support</option>
                                                    </Form.Control>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="name">
                                                    Message</label>
                                                <textarea name="message" className="form-control" rows="9" cols="25" required="required" onChange={(e)=> this.setState({message: e.target.value})}
                                                    placeholder="Enter Your Message *" value={this.state.message}></textarea>
                                            </div>
                                        </div>
                                        
                                        <div className="col-md-12">
                                            <button type="submit" className="btn btn-primary pull-right" onClick={this.submit}>
                                                Send Message</button>
                                        </div>
                                    </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <form>
                                <legend><span className="glyphicon glyphicon-globe"></span>Our office</legend>
                                <address>
                                    <strong>Twitter, Inc.</strong><br/>
                                    795 Near Grand Plaza, Suite 600<br/>
                                    Noida Sector 7, CA 94107<br/>
                                    Phone no. :
                                    (123) 456-7890
                                </address>
                                <address>
                                    <strong>Full Name</strong><br/>
                                    <a href="mailto:#">tamra.slnd@shangri-la.com</a>
                                </address>
                                </form>
                            </div>
                        </div>
                    </div>


                <Footer/>
            </div>
        )
    }
}
