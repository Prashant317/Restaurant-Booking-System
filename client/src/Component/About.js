import React, { Component } from 'react'
import Navbar2 from './Navbar2'
import Footer from './Footer'
import { Breadcrumb } from 'react-bootstrap';
import '../CSS/style.css'

export default class About extends Component {
    render() {
        return (
            <div>
                <Navbar2/>

                <img className="d-block w-100" src={require('../media/about.jpg')} height="400px"  alt="restaurant"/>
                <Breadcrumb>
                    <Breadcrumb.Item href="/"><h5 className="bread">Home</h5></Breadcrumb.Item>
                    <Breadcrumb.Item href="/about">
                        <h5 className="bread">About Us</h5>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb>
                
                <br/><br/>
                <div className="container">
                    <p style={{fontSize:"18px"}}>
                        Tamra, opened at the Shangri-La hotel on Janpath, takes its name very seriously. Meaning copper in Sanskrit, the restaurant is done up in more than 50 shades of the tone, and far more tastefully than a certain book series.
                    </p>
                    <p style={{fontSize:"18px"}}>
                        The cavernous interiors boast theatre kitchens for each cuisine served (Japanese, Thai, Chinese, European and Indian all lined, or rather, laned up) with chefs cooking before your very eyes. There’s also a luxuriantly long bar for the dipsomaniacs among us. The seating area is an oasis of calm, segregated by glass panels and arranged into both cosy nooks as well as elaborate table spreads. A buffet spread, the tables practically groaning under the weight of the provender, acts as a natural barrier between the two sections. The service, like the crockery and tablecloths, is pristine.
                    </p>
                    <p style={{fontSize:"18px"}}>
                        We first head to the buffet, deciding to supplement our fare with a selection of the a la carte menu (patrons can choose between either, or like us, indulge in both). We pack our platter high with an assortment of dishes (a daily changing affair, we are told, much like Giacomo Casanova’s) too many to enumerate here, in the interest of brevity. However, there is one item, which like Cthulhu but far more palatably, will stalk our dreams at night. Essentially a porcine hummus, it comprises liquified pork in a shot glass, and is deliciousness distilled. We go back for seconds. And thirds. There might have been a fourth time, which we’ve blocked out in shame.
                    </p>
                    <p style={{fontSize:"18px"}}>
                        Off the menu, we dally with the Thai Chicken Croquetas, well marinated chicken diskettes served diner-style in a deep fryer tray (though there is nothing greasy about them). These are accompanied by a chunky and curiously chatoyant peanut sauce which encourages to you, like that popular tea brand jingle, to dip, dip, dip.
                    </p>
                    <p style={{fontSize:"18px"}}>
                        Dessert comprises the signature Tamra Chocolate; similar to a chocolate bombe, attended to by pieces of crunchy peanut brittle and other accoutrements, the dish is finished a le gueridon, poured over with a warm decadent sauce which transmutes the entire pudding into an inchoate chocolatey mess. To quote Jamie Oliver (only this once, we promise): delish.
                    </p>

                </div>
                <Footer/>
            </div>  
        )
    }
}
