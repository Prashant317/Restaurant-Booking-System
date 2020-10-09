import React, { Component } from 'react'
import Navbar2 from './Navbar2'
import Footer from './Footer'
import { Breadcrumb } from 'react-bootstrap';
import '../CSS/style.css'

export default class Services extends Component {
    render() {
        return (
            <div>
                <Navbar2/>

                <Breadcrumb>
                    <Breadcrumb.Item href="/"><h5 className="bread">Home</h5></Breadcrumb.Item>
                    <Breadcrumb.Item href="/pricing">
                        <h5 className="bread">Pricing</h5>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb>


                <section className="pricing py-5">
                <div className="container">
                    <h1 style={{color:"white", textAlign:"center"}}>Start Your Membership Today <br/>To Enjoy Additional Benefits</h1>
                    <br/>
                    <div className="row">

                    <div className="col-lg-4">
                        <div className="card mb-5 mb-lg-0">
                        <div className="card-body">
                            <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
                            <h6 className="card-price text-center">$0<span className="period">/month</span></h6>
                            <hr/>
                            <ul className="fa-ul">
                            <li><span className="fa-li"><i className="fas fa-check"></i></span>Table Bookings</li>
                            <li><span className="fa-li"><i className="fas fa-check"></i></span>Free Access</li>
                            <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Buffet</li>
                            <li><span className="fa-li"><i className="fas fa-check"></i></span>Free Vouchers</li>
                            <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Daily Conins</li>
                            <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>10% Discount</li>
                            <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>20% Off On 2nd Visit</li>
                            <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>50% Additional Off</li>
                            </ul>
                            <a href="/pricing" className="btn btn-block btn-primary text-uppercase">Get Started</a>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card mb-5 mb-lg-0">
                        <div className="card-body">
                            <h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
                            <h6 className="card-price text-center">$9<span className="period">/month</span></h6>
                            <hr/>
                            <ul className="fa-ul">
                            <li><span className="fa-li"><i className="fas fa-check"></i></span>Table Bookings</li>
                            <li><span className="fa-li"><i className="fas fa-check"></i></span>Free Access</li>
                            <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Buffet</li>
                            <li><span className="fa-li"><i className="fas fa-check"></i></span>Free Vouchers</li>
                            <li><span className="fa-li"><i className="fas fa-check"></i></span>Daily Coins</li>
                            <li><span className="fa-li"><i className="fas fa-check"></i></span>10% Discount</li>
                            <li><span className="fa-li"><i className="fas fa-check"></i></span>20% Off On @nd Visit</li>
                            <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>50% Additional Off</li>
                            </ul>
                            <a href="/pricing" className="btn btn-block btn-primary text-uppercase">Buy Plan</a>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
                            <h6 className="card-price text-center">$49<span className="period">/month</span></h6>
                            <hr/>
                            <ul className="fa-ul">
                            <li><span className="fa-li"><i className="fas fa-check"></i></span>Table Bookings</li>
                            <li><span className="fa-li"><i className="fas fa-check"></i></span>Free Access</li>
                            <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Buffet</li>
                            <li><span className="fa-li"><i className="fas fa-check"></i></span>Free Vouchers</li>
                            <li><span className="fa-li"><i className="fas fa-check"></i></span>Daily Coins</li>
                            <li><span className="fa-li"><i className="fas fa-check"></i></span>10% Discount</li>
                            <li><span className="fa-li"><i className="fas fa-check"></i></span>20% Off On @nd Visit</li>
                            <li><span className="fa-li"><i className="fas fa-check"></i></span>50% Additional Off</li>
                            </ul>
                            <a href="/pricing" className="btn btn-block btn-primary text-uppercase">Buy Plan</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>

                <Footer/>
            </div>
        )
    }
}
