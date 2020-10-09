import React, { Component } from 'react'
import Navbar2 from './Navbar2'
import { Carousel, Breadcrumb } from 'react-bootstrap';
import Footer from './Footer'
import '../CSS/style.css'

export default class Begin extends Component {

    render() {
   
        return (
            <div>
                <Navbar2/>

                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={require('../media/res1.jpg')} height="800px" width="100%" alt="restaurant"/>
                    
                        <Carousel.Caption>
                        <h1>Hungry? Come To Us</h1>
                        <h3>We will provide you your favourite food...</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={require('../media/res2.jpg')} height="800px" width="100%" alt="restaurant"/>

                        <Carousel.Caption>
                        <h1>Hungry? Come To Us</h1>
                        <h3>We will provide you your favourite food...</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={require('../media/res3.jpg')} height="800px" width="100%" alt="Third slide"/>

                        <Carousel.Caption>
                        <h1>Hungry? Come To Us</h1>
                        <h3>We will provide you your favourite food...</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                
                <Breadcrumb>
                    <Breadcrumb.Item href="/"><h5 className="bread">Home</h5></Breadcrumb.Item>
                    <Breadcrumb.Item active > <h5 > Data </h5></Breadcrumb.Item>
                </Breadcrumb>

                <div className="container">
                    <br/><br/>
            
                <h3 style={{color:"red", textAlign:"center", textDecoration:"underline"}}>Welcome To Tamra Restaurant</h3>
                <br/>
                <h6 >Tamra, opened at the Shangri-La hotel on Janpath, takes its name very seriously. Meaning copper in Sanskrit, the restaurant is done up in more than 50 shades of the tone, and far more tastefully than a certain book series.</h6><br/>
                <h6>The cavernous interiors boast theatre kitchens for each cuisine served (Japanese, Thai, Chinese, European and Indian all lined, or rather, laned up) with chefs cooking before your very eyes. There’s also a luxuriantly long bar for the dipsomaniacs among us. The seating area is an oasis of calm, segregated by glass panels and arranged into both cosy nooks as well as elaborate table spreads. A buffet spread, the tables practically groaning under the weight of the provender, acts as a natural barrier between the two sections. The service, like the crockery and tablecloths, is pristine.</h6>

                <br/><br/>
                <div className="row">

                    <div className="col-lg-4 col-sm-6 mb-4">

                    <div className="card h-100">
                        <img className="card-img-top" src={require('../media/gal1.jpg')} alt="gallery photos"/>
                        
                    </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 mb-4">
                    <div className="card h-100">
                        <img className="card-img-top" src={require('../media/gal2.jpg')}  alt="gallery photos"/>
                        
                    </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                    <div className="card h-100">
                       <img className="card-img-top" src={require('../media/gal3.jpg')}  alt="gallery photos"/>
                        
                    </div>
                    </div>
                </div>
               
                </div>
                <Footer/>
            </div>
        )
    }
}
