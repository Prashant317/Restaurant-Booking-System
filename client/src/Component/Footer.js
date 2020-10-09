import React, { Component } from 'react'
import "../CSS/Footer.css"

export default class Footer extends Component {
    render() {
        return (
            <div >
                <br/><br/><br/>
                    <footer className="footer" >

                        <div className="container">
                            <ul className="foote_bottom_ul_amrc">
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About Us</a></li>
                                <li><a href="/service">Services</a></li>
                                <li><a href="/pricing">Pricing</a></li>
                                <li><a href="/contact">Contact Us</a></li>
                            </ul>
                                
                            <p className="text-center">Copyright @2021 | Designed With by <a href="/">Tamra Restaurant</a></p>

                            <ul className="social_footer_ul" >
                                <li><a href="http://webenlance.com"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="http://webenlance.com"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="http://webenlance.com"><i className="fab fa-linkedin"></i></a></li>
                                <li><a href="http://webenlance.com"><i className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>

                    </footer>

            </div>
        )
    }
}
